/*
 Navicat Premium Data Transfer

 Source Server         : 本地MySQL
 Source Server Type    : MySQL
 Source Server Version : 50729
 Source Host           : localhost:3306
 Source Schema         : assocaition

 Target Server Type    : MySQL
 Target Server Version : 50729
 File Encoding         : 65001

 Date: 11/11/2020 16:18:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity`  (
  `ac_id` int(11) NOT NULL AUTO_INCREMENT,
  `ac_title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ac_money` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ac_person` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ac_remarks` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ac_status` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '待审核',
  PRIMARY KEY (`ac_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES (1, '圣诞', '1000', '段建辉', '报销', '通过');
INSERT INTO `activity` VALUES (2, '元旦', '800', '罗嘉诚', '无', '不通过');
INSERT INTO `activity` VALUES (3, '端午', '1000', '向建军', '报销', '通过');

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, '2', '123456');
INSERT INTO `admin` VALUES (2, '201701420621', '123456');
INSERT INTO `admin` VALUES (3, '1', '123456');
INSERT INTO `admin` VALUES (4, '2', '123456');
INSERT INTO `admin` VALUES (5, '3', '123456');

-- ----------------------------
-- Table structure for associations
-- ----------------------------
DROP TABLE IF EXISTS `associations`;
CREATE TABLE `associations`  (
  `as_id` int(11) NOT NULL AUTO_INCREMENT,
  `as_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `as_person` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `as_phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `as_email` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `as_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`as_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of associations
-- ----------------------------
INSERT INTO `associations` VALUES (1, '校办', '肖誉', '18274441134', '1256591321@qq.com', '2020-11-08');
INSERT INTO `associations` VALUES (2, '乒协', '段建辉', '18274441134', '1256591321@qq.com', '2018-05-08');
INSERT INTO `associations` VALUES (3, '街舞', '罗嘉诚', '123456789', '1256591321@qq.com', '2020-11-09');

-- ----------------------------
-- Table structure for members
-- ----------------------------
DROP TABLE IF EXISTS `members`;
CREATE TABLE `members`  (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `m_name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `m_sex` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `m_email` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `m_phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `m_age` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`m_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of members
-- ----------------------------
INSERT INTO `members` VALUES (9, '段建辉', '男', '1256591321@qq.com', '18274441134', '20');
INSERT INTO `members` VALUES (10, '罗嘉诚', '女', '1256591321@qq.com', '15580957737', '21');
INSERT INTO `members` VALUES (11, '咸建进', '男', '1256591321@qq.com', '18274441134', '21');
INSERT INTO `members` VALUES (12, '刘鑫', '男', '1256591321@qq.com', '18274441134', '20');

SET FOREIGN_KEY_CHECKS = 1;
