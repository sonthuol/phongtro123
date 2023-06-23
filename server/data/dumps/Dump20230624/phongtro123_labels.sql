-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: phongtro123
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `labels`
--

DROP TABLE IF EXISTS `labels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labels`
--

LOCK TABLES `labels` WRITE;
/*!40000 ALTER TABLE `labels` DISABLE KEYS */;
INSERT INTO `labels` VALUES (1,'TKO4','Cho thuê căn hộ dịch vụ Quận Gò Vấp','2023-06-23 16:41:28','2023-06-23 16:41:28'),(2,'NAM9','Cho thuê căn hộ mini Quận 7','2023-06-23 16:41:28','2023-06-23 16:41:28'),(3,'SRH4','Cho thuê căn hộ Quận Hà Đông','2023-06-23 16:41:28','2023-06-23 16:41:28'),(4,'RTK4','Cho thuê căn hộ Quận 2','2023-06-23 16:41:28','2023-06-23 16:41:28'),(5,'MUR7','Cho thuê căn hộ dịch vụ Quận Bình Thạnh','2023-06-23 16:41:28','2023-06-23 16:41:28'),(6,'GSZ1','Cho thuê căn hộ mini Quận 7','2023-06-23 16:41:28','2023-06-23 16:41:28'),(7,'HFT9','Cho thuê căn hộ dịch vụ Quận Bình Thạnh','2023-06-23 16:41:28','2023-06-23 16:41:28'),(8,'IZD6','Cho thuê căn hộ dịch vụ Quận Hai Bà Trưng','2023-06-23 16:41:28','2023-06-23 16:41:28'),(9,'YLY3','Cho thuê căn hộ dịch vụ Quận 10','2023-06-23 16:41:28','2023-06-23 16:41:28'),(10,'FBK2','Cho thuê căn hộ dịch vụ Quận Tân Bình','2023-06-23 16:41:28','2023-06-23 16:41:28'),(11,'GFA2','Cho thuê căn hộ dịch vụ Quận 7','2023-06-23 16:41:28','2023-06-23 16:41:28'),(12,'YJE1','Cho thuê căn hộ mini Quận 7','2023-06-23 16:41:28','2023-06-23 16:41:28'),(13,'KRH3','Cho thuê căn hộ dịch vụ Quận 1','2023-06-23 16:41:28','2023-06-23 16:41:28'),(14,'KAX5','Cho thuê căn hộ Quận Gò Vấp','2023-06-23 16:41:28','2023-06-23 16:41:28'),(15,'QUH1','Cho thuê căn hộ mini Quận 7','2023-06-23 16:41:28','2023-06-23 16:41:28'),(16,'PPW5','Cho thuê căn hộ mini Quận 7','2023-06-23 16:41:28','2023-06-23 16:41:28'),(17,'WNN9','Cho thuê căn hộ Quận 7','2023-06-23 16:41:28','2023-06-23 16:41:28'),(18,'WFF6','Cho thuê căn hộ dịch vụ Quận Bình Thạnh','2023-06-23 16:41:28','2023-06-23 16:41:28'),(19,'NVG6','Cho thuê căn hộ mini Quận Ba Đình','2023-06-23 16:41:28','2023-06-23 16:41:28'),(20,'HIA6','Cho thuê căn hộ mini Quận 1','2023-06-23 16:41:28','2023-06-23 16:41:28'),(21,'BSL7','Cho thuê mặt bằng Quận 7','2023-06-23 16:41:56','2023-06-23 16:41:56'),(22,'CHD2','Cho thuê mặt bằng Quận 3','2023-06-23 16:41:56','2023-06-23 16:41:56'),(23,'JKH4','Cho thuê mặt bằng Quận Nam Từ Liêm','2023-06-23 16:41:56','2023-06-23 16:41:56'),(24,'RVA9','Cho thuê mặt bằng Quận Ninh Kiều','2023-06-23 16:41:56','2023-06-23 16:41:56'),(25,'IMT1','Cho thuê mặt bằng Quận 2','2023-06-23 16:41:56','2023-06-23 16:41:56'),(26,'YIR6','Cho thuê mặt bằng Quận 5','2023-06-23 16:41:56','2023-06-23 16:41:56'),(27,'IGW2','Cho thuê mặt bằng Quận 8','2023-06-23 16:41:56','2023-06-23 16:41:56'),(28,'BUR9','Cho thuê mặt bằng Quận 2','2023-06-23 16:41:56','2023-06-23 16:41:56'),(29,'CLC2','Cho thuê mặt bằng Quận Gò Vấp','2023-06-23 16:41:56','2023-06-23 16:41:56'),(30,'ONS5','Cho thuê mặt bằng Quận 7','2023-06-23 16:41:56','2023-06-23 16:41:56'),(31,'XRM3','Cho thuê mặt bằng Quận Tân Phú','2023-06-23 16:41:56','2023-06-23 16:41:56'),(32,'ILO9','Cho thuê mặt bằng Quận Gò Vấp','2023-06-23 16:41:56','2023-06-23 16:41:56'),(33,'AZQ5','Cho thuê mặt bằng Quận Gò Vấp','2023-06-23 16:41:56','2023-06-23 16:41:56'),(34,'RNF5','Cho thuê mặt bằng Thị Xã Thủ Dầu Một','2023-06-23 16:41:56','2023-06-23 16:41:56'),(35,'WWW9','Cho thuê mặt bằng Quận Phú Nhuận','2023-06-23 16:41:56','2023-06-23 16:41:56'),(36,'BMB3','Cho thuê mặt bằng Quận Thủ Đức','2023-06-23 16:41:56','2023-06-23 16:41:56'),(37,'JUM8','Cho thuê mặt bằng Quận Đống Đa','2023-06-23 16:41:56','2023-06-23 16:41:56'),(38,'VFU9','Cho thuê mặt bằng Huyện Củ Chi','2023-06-23 16:41:56','2023-06-23 16:41:56'),(39,'WYP1','Cho thuê mặt bằng Quận Tân Phú','2023-06-23 16:41:56','2023-06-23 16:41:56'),(40,'ANM7','Cho thuê mặt bằng Quận 12','2023-06-23 16:41:56','2023-06-23 16:41:56'),(41,'CUF4','Cho thuê phòng trọ Quận Bình Thạnh','2023-06-23 16:43:10','2023-06-23 16:43:10'),(42,'IQE3','Cho thuê phòng trọ Quận Tân Bình','2023-06-23 16:43:10','2023-06-23 16:43:10'),(43,'STZ4','Cho thuê phòng trọ Quận Tân Bình','2023-06-23 16:43:10','2023-06-23 16:43:10'),(44,'YCD2','Cho thuê phòng trọ Quận 7','2023-06-23 16:43:10','2023-06-23 16:43:10'),(45,'SEH8','Cho thuê phòng trọ Quận Gò Vấp','2023-06-23 16:43:10','2023-06-23 16:43:10'),(46,'MEN3','Cho thuê phòng trọ Quận 7','2023-06-23 16:43:10','2023-06-23 16:43:10'),(47,'YDB8','Cho thuê phòng trọ Quận Tân Bình','2023-06-23 16:43:10','2023-06-23 16:43:10'),(48,'NJX9','Cho thuê phòng trọ Quận Tân Phú','2023-06-23 16:43:10','2023-06-23 16:43:10'),(49,'XMC8','Cho thuê phòng trọ Quận Gò Vấp','2023-06-23 16:43:10','2023-06-23 16:43:10'),(50,'XMU2','Cho thuê phòng trọ Quận Tân Phú','2023-06-23 16:43:10','2023-06-23 16:43:10'),(51,'QMQ1','Cho thuê phòng trọ Quận 2','2023-06-23 16:43:10','2023-06-23 16:43:10'),(52,'VRL5','Cho thuê phòng trọ Quận 10','2023-06-23 16:43:10','2023-06-23 16:43:10'),(53,'MQN4','Cho thuê phòng trọ Quận Phú Nhuận','2023-06-23 16:43:10','2023-06-23 16:43:10'),(54,'SDX7','Cho thuê phòng trọ Quận Gò Vấp','2023-06-23 16:43:10','2023-06-23 16:43:10'),(55,'OWU5','Cho thuê phòng trọ Quận Bình Thạnh','2023-06-23 16:43:10','2023-06-23 16:43:10'),(56,'EHX7','Cho thuê phòng trọ Quận 2','2023-06-23 16:43:10','2023-06-23 16:43:10'),(57,'BZX2','Cho thuê phòng trọ Quận Bình Thạnh','2023-06-23 16:43:10','2023-06-23 16:43:10'),(58,'TJQ8','Cho thuê phòng trọ Quận 2','2023-06-23 16:43:10','2023-06-23 16:43:10'),(59,'AUH2','Cho thuê phòng trọ Quận Bình Thạnh','2023-06-23 16:43:10','2023-06-23 16:43:10'),(60,'UIP7','Cho thuê phòng trọ Quận Bình Thạnh','2023-06-23 16:43:10','2023-06-23 16:43:10'),(61,'XNT5','Cho thuê nhà Quận Gò Vấp','2023-06-23 16:43:42','2023-06-23 16:43:42'),(62,'LXV7','Cho thuê nhà Quận Bình Tân','2023-06-23 16:43:42','2023-06-23 16:43:42'),(63,'XCP1','Cho thuê nhà Quận Gò Vấp','2023-06-23 16:43:42','2023-06-23 16:43:42'),(64,'WUG6','Cho thuê nhà Quận 1','2023-06-23 16:43:42','2023-06-23 16:43:42'),(65,'PYK4','Cho thuê nhà Quận Tân Phú','2023-06-23 16:43:42','2023-06-23 16:43:42'),(66,'UZZ8','Cho thuê nhà Quận Bình Tân','2023-06-23 16:43:42','2023-06-23 16:43:42'),(67,'EPT8','Cho thuê nhà Quận Thủ Đức','2023-06-23 16:43:42','2023-06-23 16:43:42'),(68,'REZ6','Cho thuê nhà Quận Gò Vấp','2023-06-23 16:43:42','2023-06-23 16:43:42'),(69,'YZX1','Cho thuê nhà Huyện Đồng Phù','2023-06-23 16:43:42','2023-06-23 16:43:42'),(70,'VAD4','Cho thuê nhà Quận Bình Thạnh','2023-06-23 16:43:42','2023-06-23 16:43:42'),(71,'QGC2','Cho thuê nhà Quận Tây Hồ','2023-06-23 16:43:42','2023-06-23 16:43:42'),(72,'QYO4','Cho thuê nhà Thành Phố Phan Thiết','2023-06-23 16:43:42','2023-06-23 16:43:42'),(73,'QPQ6','Cho thuê nhà Huyện Nhà Bè','2023-06-23 16:43:42','2023-06-23 16:43:42'),(74,'PFK4','Cho thuê nhà Quận Bình Tân','2023-06-23 16:43:42','2023-06-23 16:43:42'),(75,'QDS2','Cho thuê nhà Quận Bình Tân','2023-06-23 16:43:42','2023-06-23 16:43:42'),(76,'AOZ7','Cho thuê nhà Quận Thủ Đức','2023-06-23 16:43:42','2023-06-23 16:43:42'),(77,'GNE5','Cho thuê nhà Quận 10','2023-06-23 16:43:42','2023-06-23 16:43:42'),(78,'JLR4','Cho thuê nhà Quận 9','2023-06-23 16:43:42','2023-06-23 16:43:42'),(79,'QAB5','Cho thuê nhà Quận 9','2023-06-23 16:43:42','2023-06-23 16:43:42'),(80,'EYU1','Cho thuê nhà Quận 9','2023-06-23 16:43:42','2023-06-23 16:43:42');
/*!40000 ALTER TABLE `labels` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-24  0:14:20
