# Deploying a Node.js Application on AWS EC2 Instance

![NodeJS to AWS](./NodeAws.png)

# Deploying Node.js Application on AWS EC2 Instance

This guide will walk you through the steps to deploy a Node.js application on an AWS EC2 Linux instance.

## Prerequisites

- An AWS account
- Basic knowledge of Node.js
- A Node.js application to deploy

---

## Steps to Deploy the Application

### 1. Login to AWS Console

- Log in to your [AWS account](https://aws.amazon.com/console/).
- Navigate to the **EC2** service by typing "EC2" in the services search bar.

### 2. Launch an EC2 Instance

- Select **Launch Instance**.
- Name your instance, for example: `nodejs_AWS`.
- Choose the appropriate AMI (Amazon Machine Image). In this case, select **Ubuntu** or any Linux-based AMI.
- Configure your instance, select **t2.micro** or as per your needs.
- In the **Key pair** section, create or choose a key pair to access the instance later.

### 3. Configure Security Group

- Allow **HTTP** access from the internet.
- Ensure your security group allows **port 3000** (or whatever port your Node.js application uses) for **TCP** traffic.

### 4. Connect to the EC2 Instance

Once your instance is running:

- Open the terminal and SSH into the instance:

  ```bash
  ssh -i your-key-file.pem ubuntu@your-ec2-public-ip
  ```

Switch to the superuser:

```bash
sudo su
```

5. Install Node.js and Git

- Install Git:

```bash
sudo apt update
```

```bash
sudo apt install git
```

- Install Node.js using Node Version Manager (nvm):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

```bash
source ~/.nvm/nvm.sh
```

```bash
nvm install 16
```

Verify the installation:

```bash
node -v
git --version
```

6. Clone the Repository
   Clone your Node.js application from GitHub:

```bash
git clone https://github.com/your-username/your-nodejs-repo.git
```

```bash
cd your-nodejs-repo
```

7. Install Dependencies
   Install the required dependencies:

```bash
npm install
```

8. Start the Application
   Run the application:

```bash
node index.js
```

#### Your application should now be running. Verify by visiting http://your-ec2-public-ip:3000 in your browser.

9. Configure Security Group for Port 3000
   If you haven't already configured security groups:

Go to EC2 Dashboard.

- Select your running instance
- Navigate to Security Groups.
- Edit Inbound Rules and allow Custom TCP on Port 3000 from Anywhere.

10. Run the Application with PM2

To keep your application running even after disconnecting from the terminal, install and use PM2:

Install PM2 globally:

```bash
npm install pm2 -g
```

Start your app with PM2:

```bash
pm2 start index.js
```

Verify that the app is running with:

```bash
pm2 list
```

Now, even if you disconnect from the SSH session, your application will continue running.

![Node Running Server AWS](./node.js%20server.png)
