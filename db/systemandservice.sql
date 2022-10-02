-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 11, 2022 at 03:40 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `systemandservice`
--

-- --------------------------------------------------------

--
-- Table structure for table `Accounts`
--

CREATE TABLE `Accounts` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `age` decimal(10,0) DEFAULT NULL,
  `weight` decimal(10,0) DEFAULT 0,
  `height` decimal(10,0) DEFAULT 0,
  `dob` datetime DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'user',
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Accounts`
--

INSERT INTO `Accounts` (`id`, `fname`, `lname`, `address`, `tel`, `email`, `username`, `password`, `gender`, `age`, `weight`, `height`, `dob`, `start_date`, `image`, `role`, `status`, `created_at`, `updated_at`) VALUES
('C0001', 'customerOne', 'system', '-', '0812345678', 'customer@email.com', 'customer01', '$2b$08$TC317M9YwAgwENOzh1i6Pe.8.1m.xHlL8wJguL5ZRePKi0pUqO8sO', 'ชาย', NULL, '0', '0', '2022-09-07 12:54:06', NULL, '', 'customer', 1, '2022-09-11 12:54:12', '2022-09-11 13:00:10'),
('C0002', 'customerTwo', 'system', '-', '0812345678', 'customer@email.com', 'customer02', '$2b$08$cSoJkf6uJiPcgzEDU85oqukwuCDP3aGInHYe3Vuf32ghO70UmKY2W', 'ชาย', NULL, '0', '0', '2022-09-07 13:00:47', NULL, '', 'customer', 1, '2022-09-11 13:00:51', '2022-09-11 13:00:51'),
('U0001', 'admin', 'system', '-', '-', 'admin@email.com', 'admin', '$2b$08$xJALi.bb3kP4qV8s/EFMtutGDpy7c1vpzK362FiC2RQT3hZy5n7Ga', 'ชาย', NULL, '0', '0', '2022-09-01 12:47:54', NULL, 'image-1662900519326-801452161.jpeg', 'admin', 1, '2022-09-11 12:48:39', '2022-09-11 12:48:39'),
('U0002', 'employeeOne', 'system', '-', '0812345678', 'employee1@email.com', 'emp01', '$2b$08$FraNhXf.oGFFA5WwsMSnT.uHcwv89Z2DV4olLfRnHn9P1aND0gpr2', 'ชาย', NULL, '0', '0', '2022-09-01 12:51:34', '2022-09-01 12:51:40', '', 'employee', 1, '2022-09-11 12:51:43', '2022-09-11 12:59:17'),
('U0003', 'user', 'system', '-', '0812345678', 'user@email.com', 'user01', '$2b$08$xxGd19CDojplYg2RH8RsjeX9m/wM1o4Iw1O5e0WNV64o2gJMFuHv6', 'ชาย', NULL, '0', '0', '2022-09-02 12:52:54', NULL, '', 'user', 1, '2022-09-11 12:53:01', '2022-09-11 12:53:01'),
('U0004', 'employeeTwo', 'system', '-', '0812345678', 'employee@email.com', 'employee02', '$2b$08$JIwHO6SJwLpw6NHJ7BQvf.jtQQ357x0Q1R1T3W6/urvGuNPE4svNG', 'หญิง', NULL, '0', '0', '2022-09-01 12:58:17', '2022-09-02 12:58:22', '', 'employee', 1, '2022-09-11 12:58:29', '2022-09-11 12:59:36');

-- --------------------------------------------------------

--
-- Table structure for table `AlbumImages`
--

CREATE TABLE `AlbumImages` (
  `id` int(11) NOT NULL,
  `picwork_id` int(11) DEFAULT NULL,
  `image_album` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `AlbumImages`
--

INSERT INTO `AlbumImages` (`id`, `picwork_id`, `image_album`, `created_at`, `updated_at`) VALUES
(1, 1, 'image-1662902276688-272732305.jpeg', '2022-09-11 13:17:56', '2022-09-11 13:17:56'),
(2, 1, 'image-1662902283251-611484911.jpeg', '2022-09-11 13:18:03', '2022-09-11 13:18:03'),
(3, 1, 'image-1662902289352-527665778.jpeg', '2022-09-11 13:18:09', '2022-09-11 13:18:09'),
(4, 1, 'image-1662902296322-886819478.jpeg', '2022-09-11 13:18:16', '2022-09-11 13:18:16'),
(5, 1, 'image-1662902309129-997273279.jpeg', '2022-09-11 13:18:29', '2022-09-11 13:18:29'),
(6, 1, 'image-1662902313921-330206905.jpeg', '2022-09-11 13:18:33', '2022-09-11 13:18:33'),
(7, 1, 'image-1662902318741-609476354.jpeg', '2022-09-11 13:18:38', '2022-09-11 13:18:38'),
(8, 1, 'image-1662902323582-202898381.jpeg', '2022-09-11 13:18:43', '2022-09-11 13:18:43'),
(9, 1, 'image-1662902329006-631117827.jpeg', '2022-09-11 13:18:49', '2022-09-11 13:18:49');

-- --------------------------------------------------------

--
-- Table structure for table `Comments`
--

CREATE TABLE `Comments` (
  `id` int(11) NOT NULL,
  `alias` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `question_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Contacts`
--

CREATE TABLE `Contacts` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title_service` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `service` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Contacts`
--

INSERT INTO `Contacts` (`id`, `fullname`, `email`, `tel`, `title_service`, `service`, `description`, `created_at`, `updated_at`) VALUES
(1, 'samit', 'user@email.com', '0812345678', 'ปรึกษาเฉพาะเรื่อง', 'ติดตั้งกล้องวงจรปิด,ติดตั้งไฟฟ้า', 'description', '2022-09-11 12:49:59', '2022-09-11 12:49:59');

-- --------------------------------------------------------

--
-- Table structure for table `Customers`
--

CREATE TABLE `Customers` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Picworks`
--

CREATE TABLE `Picworks` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image_album` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Picworks`
--

INSERT INTO `Picworks` (`id`, `name`, `image_album`, `created_at`, `updated_at`) VALUES
(1, 'รีวิวงานติดตั้งกล้องวงจรปิด 9 ตัวไปรษณีย์ สาขาหนองใหญ่ จ.ชลบุรี', 'image-1662902267684-932701544.jpeg', '2022-09-11 13:17:47', '2022-09-11 13:17:47');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `brand` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `model` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `name`, `brand`, `model`, `description`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
('ml001', 'Product02', 'test', 'pro-02', 'description', 1, '5', '2022-09-11 12:56:57', '2022-09-11 12:57:11'),
('wi001', 'Product01', 'test', 'pro-01', 'description', 1, '12', '2022-09-11 12:56:27', '2022-09-11 12:56:27');

-- --------------------------------------------------------

--
-- Table structure for table `Questions`
--

CREATE TABLE `Questions` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `count_comment` int(11) NOT NULL DEFAULT 0,
  `tag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Questions`
--

INSERT INTO `Questions` (`id`, `title`, `description`, `alias`, `email`, `views`, `count_comment`, `tag`, `status`, `created_at`, `updated_at`) VALUES
(1, 'คิดว่าในอนาคต AI จะอยู่เหนือมนุษย์หรือไม่ ?', '<p>ได้ไปดูวิดีโอหนึ่งมาโดยบังเอิญ เป็นเกี่ยวกับบุคคลคนหนึ่งกล่าวไว้ว่าAI นั้นเป็นสิ่งที่อันตรายกว่าอาวุธชีวภาพ ผมก็พึ่งนึกได้ว่าตอนนี้เขากำลังพัฒนา AI กันอย่างต่อเนื่องและมันมีวิดีโอที่คนไปคุยสัมภาษณ์กับ AI แบบมันดูน่ากลัว มันดูมีการคิดการอ่านเหมือนคนเลย ผมเลยอยากรู้มากว่าในอนาคตจุดที่ AI มันถูกพัฒนาจนถึงจุดที่มันคิดเองได้เรียนรู้เองได้ AI จะมาอยู่เหนือมนุษย์หรือเปล่า และมนุษย์จะมีวิธีรับมือยังไง</p>', 'John', 'email@email.com', 0, 0, NULL, 1, '2022-09-11 12:47:07', '2022-09-11 12:47:07');

-- --------------------------------------------------------

--
-- Table structure for table `Repairs`
--

CREATE TABLE `Repairs` (
  `id` int(11) NOT NULL,
  `sale_id` int(11) DEFAULT NULL,
  `symptom1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `symptom2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `symptom3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `symptom4` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `service_staff` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `success_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Sales`
--

CREATE TABLE `Sales` (
  `id` int(11) NOT NULL,
  `account_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `customer_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_id1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantity1` int(11) DEFAULT NULL,
  `price1` decimal(10,0) DEFAULT NULL,
  `product_id2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantity2` int(11) DEFAULT NULL,
  `price2` decimal(10,0) DEFAULT NULL,
  `product_id3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantity3` int(11) DEFAULT NULL,
  `price3` decimal(10,0) DEFAULT NULL,
  `product_id4` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantity4` int(11) DEFAULT NULL,
  `price4` decimal(10,0) DEFAULT NULL,
  `sum_price` decimal(10,0) DEFAULT NULL,
  `status_payment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `purchase_date` datetime DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `warranty` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20220722170749-create-status-enum.js'),
('20220722170922-create-question.js'),
('20220801174201-create-comments.js'),
('20220803160900-create-accounts.js'),
('20220807114310-create-contacts.js'),
('20220811134313-create-customers.js'),
('20220811134324-create-products.js'),
('20220813133735-create-sales.js'),
('20220814065416-create-picworks.js'),
('20220814065548-create-album-images.js'),
('20220815141035-create-repairs.js');

-- --------------------------------------------------------

--
-- Table structure for table `StatusEnums`
--

CREATE TABLE `StatusEnums` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `StatusEnums`
--

INSERT INTO `StatusEnums` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'active', '2022-09-11 12:47:07', '2022-09-11 12:47:07'),
(2, 'inactive', '2022-09-11 12:47:07', '2022-09-11 12:47:07'),
(3, 'deleted', '2022-09-11 12:47:07', '2022-09-11 12:47:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Accounts`
--
ALTER TABLE `Accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `AlbumImages`
--
ALTER TABLE `AlbumImages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `picwork_id` (`picwork_id`);

--
-- Indexes for table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `Contacts`
--
ALTER TABLE `Contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Customers`
--
ALTER TABLE `Customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Picworks`
--
ALTER TABLE `Picworks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Questions`
--
ALTER TABLE `Questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `Repairs`
--
ALTER TABLE `Repairs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sale_id` (`sale_id`),
  ADD KEY `service_staff` (`service_staff`);

--
-- Indexes for table `Sales`
--
ALTER TABLE `Sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_id` (`account_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id1` (`product_id1`),
  ADD KEY `product_id2` (`product_id2`),
  ADD KEY `product_id3` (`product_id3`),
  ADD KEY `product_id4` (`product_id4`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `StatusEnums`
--
ALTER TABLE `StatusEnums`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `AlbumImages`
--
ALTER TABLE `AlbumImages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Comments`
--
ALTER TABLE `Comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Contacts`
--
ALTER TABLE `Contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Picworks`
--
ALTER TABLE `Picworks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Questions`
--
ALTER TABLE `Questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Repairs`
--
ALTER TABLE `Repairs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Sales`
--
ALTER TABLE `Sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `StatusEnums`
--
ALTER TABLE `StatusEnums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Accounts`
--
ALTER TABLE `Accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`status`) REFERENCES `StatusEnums` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `AlbumImages`
--
ALTER TABLE `AlbumImages`
  ADD CONSTRAINT `albumimages_ibfk_1` FOREIGN KEY (`picwork_id`) REFERENCES `Picworks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Comments`
--
ALTER TABLE `Comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `Comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Questions`
--
ALTER TABLE `Questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`status`) REFERENCES `StatusEnums` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Repairs`
--
ALTER TABLE `Repairs`
  ADD CONSTRAINT `repairs_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `Sales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `repairs_ibfk_2` FOREIGN KEY (`service_staff`) REFERENCES `Accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Sales`
--
ALTER TABLE `Sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `Accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `Accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_ibfk_3` FOREIGN KEY (`product_id1`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_ibfk_4` FOREIGN KEY (`product_id2`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_ibfk_5` FOREIGN KEY (`product_id3`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_ibfk_6` FOREIGN KEY (`product_id4`) REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
