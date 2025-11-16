# CPS510-EVL-Library-Database
CPS 510 Database Assignment

## Usage:
This app can either be run locally or through Docker. Please try the other if encounter issues with one of the methods.

### Local Run
1. Ensure you have an oracle client installed. If not you can download an instant client from [here.](https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip)
2. Ensure you are connected to our university's server (eg. turn on the school provided Open VPN and connect).
3. Clone this repository using: **git clone https://github.com/eleanortien/CPS510-EVL-Library-Database.git**.
4. CD into the repository folder.
5. Run **npm start** in command line.

### Docker Run
1. If using Windows or MAC, ensure you have Docker Desktop installed locally. (You follow Docker's installation instructions [here.](https://docs.docker.com/desktop/setup/install/windows-install/))
2. Clone this repository using: **git clone https://github.com/eleanortien/CPS510-EVL-Library-Database.git**.
3. CD into the repository folder. 
4. Run **./start_app_docker.sh** in command line.

If you are unable to run an sh file you can use these cli commands instead:
**docker build -t "evl-lib-img" -f "./Dockerfile" .**
Windows or MAC systems run command: docker run -e ORACLE_HOST=host.docker.internal --name "evl-library-app" -p 8080:8080 "evl-lib-img"**
Linux systems run command: docker run --network host -e ORACLE_HOST=localhost --name "evl-library-app" "evl-lib-img"


## Dev List

- [ ] oracle connection
- [ ] create tables
- [ ] drop tables
- [ ] populate tables
- [ ] simple queries
- [ ] advanced queries
- [ ] frontend
