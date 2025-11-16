#!/bin/bash

IMAGE_NAME="evl-lib-image"
CONTAINER_NAME="evl-lib-image"
DOCKERFILE_PATH="./Dockerfile"

docker build -t "$IMAGE_NAME" -f "$DOCKERFILE_PATH" .

# Check if the build was successful
if [ $? -eq 0 ]; then # $? gets exit status of last command, 0 for successful

    # Stop/remove any existing container with the same name
    if docker ps -a --format '{{.Names}}' | grep -q "$CONTAINER_NAME"; then
        echo "Removing old: $CONTAINER_NAME"
        docker stop "$CONTAINER_NAME"
        docker rm "$CONTAINER_NAME"
    fi

     # Detect platform
    PLATFORM=$(uname -s)

    if [[ "$PLATFORM" == "Linux" ]]; then
        echo "Running on Linux with --network host"
        docker run --network host -e ORACLE_HOST=localhost --name "$CONTAINER_NAME" "$IMAGE_NAME"
    else

        # Run the Docker container ()
        docker run -e ORACLE_HOST=host.docker.internal --name "$CONTAINER_NAME" -p 8080:8080 "$IMAGE_NAME"
    fi

else
    echo "Failed to build docker image."
    exit 1
fi
