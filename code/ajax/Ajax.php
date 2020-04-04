<?php

sleep(3);

$uname = $_GET["username"];

$phonenum = $_POST["phonenum"];

if ($uname != "") {
    if ($uname == "yxh") {
        echo "用户名已经存在";
    } else {
        echo "用户名可用！";
    }
} 


if ($phonenum != "") {
    if ($phonenum == "110") {
        echo "手机号已经存在！";
    } else {
        echo "手机号可用！";
    }
} 
