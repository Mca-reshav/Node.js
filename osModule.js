//OS Module: It is an internal module of node js, used when we need to check the system information like: architecture, ram, disk space etc. It will behave different based on os type like - win, mac and linux

const os=require('os');
// 1: To check the architecture of system like- x32, x64 and x84
console.log("Architecture:",os.arch()); 

// 2: To check the free memory availbale in the system,it will return in terms of byte so we need to convert it into GB
console.log("Free Memory:",os.freemem()/(1024*1024*1024));

// 3: To check the total memory 
console.log("Total Memory:",os.totalmem()/(1024*1024*1024));

// 4: To check the hostname
console.log("Hostname:",os.hostname());

// 5: To check the platform
console.log("Platform:",os.platform());

// 6: To check the userInfo
console.log("UserInfo:",os.userInfo());
