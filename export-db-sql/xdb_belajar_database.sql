-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2024 at 03:53 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xdb_belajar_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `daftar_karyawan`
--

CREATE TABLE `daftar_karyawan` (
  `id` int(11) NOT NULL COMMENT 'id table',
  `nama` varchar(100) NOT NULL COMMENT 'nama karyawan',
  `alamat` varchar(500) NOT NULL COMMENT 'alamat tempat tinggal karyawan',
  `no_telepon` varchar(15) DEFAULT NULL COMMENT 'nomor telepon',
  `gol_darah` varchar(2) DEFAULT NULL COMMENT 'golongan darah',
  `jenis_kelamin` char(1) NOT NULL COMMENT 'jenis kelamin',
  `departemen_id` int(11) DEFAULT NULL,
  `jabatan_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `daftar_karyawan`
--

INSERT INTO `daftar_karyawan` (`id`, `nama`, `alamat`, `no_telepon`, `gol_darah`, `jenis_kelamin`, `departemen_id`, `jabatan_id`) VALUES
(1, 'Amirah Puspadewi', 'Pamulang, Tangerang Selatan.', '08563559890', 'O', 'P', 1, 3),
(2, 'Ayesha Nadiatama Saifuddin', '', NULL, 'B', 'P', 3, 1),
(4, 'Matthew Healy', 'UK', NULL, 'O', 'L', 2, 4),
(6, 'Ross MacDonald', 'UK', '08123456789', 'O', 'L', NULL, NULL),
(7, 'George Daniel', '', NULL, 'B', '', NULL, NULL),
(8, 'Adam Hann', 'UK', NULL, 'A', 'L', 1, 2),
(9, 'Richard EB', 'Amerika', NULL, 'O', 'L', 1, 2),
(10, 'Jules Conroy', 'Amerika', NULL, 'B', 'L', 4, 4),
(11, 'Josiah Everhart', 'Amerika', NULL, 'O', 'L', 3, 1),
(12, 'Chester Bennington', 'Amerika', NULL, 'O', 'L', 3, 3),
(14, 'Felix Kjellberg', 'Jepang', '7783910', 'AB', 'L', NULL, NULL),
(15, 'Sean McLoughlin', 'Irlandia', '89012664', 'O', 'L', NULL, NULL),
(16, 'Mark Edward Fischbach', 'Los Angeles', '47508081', 'A', 'L', NULL, NULL),
(20, 'Anya Taylor-Joy', 'Amerika', '7741105', 'O', 'P', NULL, NULL),
(21, 'Brianna Hildebrand', 'Amerika', '', '--', '-', NULL, NULL),
(22, 'Tom Ellis', 'Wales', '', 'B', 'L', NULL, NULL),
(23, 'Mike Shinoda', 'Amerika', '', 'O', 'L', NULL, NULL),
(24, 'Brad Delson', 'Amerika', '88900435', 'A', 'L', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `master_departemen`
--

CREATE TABLE `master_departemen` (
  `id` int(11) NOT NULL,
  `kode` varchar(5) NOT NULL,
  `nama` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `master_departemen`
--

INSERT INTO `master_departemen` (`id`, `kode`, `nama`) VALUES
(1, 'HR', 'Human Resources'),
(2, 'FIN', 'Finance'),
(3, 'IT', 'Information Technology'),
(4, 'MAR', 'Marketing');

-- --------------------------------------------------------

--
-- Table structure for table `master_jabatan`
--

CREATE TABLE `master_jabatan` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `deskripsi` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `master_jabatan`
--

INSERT INTO `master_jabatan` (`id`, `nama`, `role`, `deskripsi`) VALUES
(1, 'Officer', 'Programmer', 'Bertugas mengembangkan aplikasi'),
(2, 'Officer', 'System Analyst', 'Bertugas menganalisis kebutuhan pengembangan aplikasi'),
(3, 'Officer', 'Admin', 'Bertugas menangani kebutuhan administrasi masing-masing departemen'),
(4, 'Manager', '', 'Bertugas mengelola staff/officer/pegawai yang berada di bawahnya');

-- --------------------------------------------------------

--
-- Table structure for table `master_kategori`
--

CREATE TABLE `master_kategori` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `master_kategori`
--

INSERT INTO `master_kategori` (`id`, `nama`, `deskripsi`) VALUES
(1, 'Makanan Instan', 'Makanan instan dalam bentuk sachet atau kaleng'),
(2, 'Makanan Ringan', 'Cemilan yang dikemas dalam bentuk sachet atau bungkusan dalam porsi kecil dan tidak membuat kenyang'),
(3, 'Minuman', 'Minuman dalam kemasan, baik dalam bentuk botol, kaleng, maupun kotak'),
(4, 'Bahan Pokok', 'Bahan makanan pokok, seperti beras, jagung, singkong, dan ubi'),
(5, 'Bahan Mentah', 'Bahan makanan mentah, seperti daging sapi, ayam, dan ikan'),
(6, 'Frozen Food', 'Makanan beku berupa nugget, dan lain-lain'),
(7, 'Frozen Food', 'Makanan beku berupa nugget, dan lain-lain'),
(8, ' ', ' ');

-- --------------------------------------------------------

--
-- Table structure for table `master_produk`
--

CREATE TABLE `master_produk` (
  `id` int(11) NOT NULL,
  `kode` varchar(10) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `id_kategori` int(11) NOT NULL,
  `dibuat_oleh` int(11) NOT NULL,
  `dibuat_kapan` datetime NOT NULL,
  `diperbarui_oleh` int(11) NOT NULL,
  `diperbarui_kapan` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `master_produk`
--

INSERT INTO `master_produk` (`id`, `kode`, `nama`, `deskripsi`, `id_kategori`, `dibuat_oleh`, `dibuat_kapan`, `diperbarui_oleh`, `diperbarui_kapan`) VALUES
(1, 'IDM-GOR', 'Indomie Goreng', 'Indomie goreng rasa original', 0, 0, '2024-07-02 14:29:05', 0, '2024-07-02 14:29:05'),
(2, 'SP-BBR', 'Super Bubur', 'Bubur instan tinggal seduh', 0, 0, '2024-07-02 14:29:05', 0, '2024-07-02 14:29:05'),
(3, 'CTT-ORI', 'Chitato', 'Chitato rasa original', 2, 1, '2024-07-02 21:57:30', 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `stok`
--

CREATE TABLE `stok` (
  `id` int(11) NOT NULL,
  `kode_produk` varchar(10) NOT NULL,
  `stok_masuk` int(11) NOT NULL,
  `stok_keluar` int(11) NOT NULL,
  `stok_sisa` int(11) NOT NULL,
  `dibuat_oleh` int(11) NOT NULL,
  `dibuat_kapan` datetime NOT NULL,
  `diperbarui_oleh` int(11) NOT NULL,
  `diperbarui_kapan` datetime NOT NULL,
  `keterangan` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stok`
--

INSERT INTO `stok` (`id`, `kode_produk`, `stok_masuk`, `stok_keluar`, `stok_sisa`, `dibuat_oleh`, `dibuat_kapan`, `diperbarui_oleh`, `diperbarui_kapan`, `keterangan`) VALUES
(1, 'IDM-GOR', 50, 0, 50, 1, '2024-07-04 21:36:52', 0, '0000-00-00 00:00:00', 'Dari Gudang Cikarang'),
(2, 'SP-BBR', 175, 0, 175, 1, '2024-07-04 21:49:55', 0, '0000-00-00 00:00:00', 'Dari Pabrik Sidoarjo'),
(3, 'CTT-ORI', 125, 0, 125, 1, '2024-07-04 21:57:13', 0, '0000-00-00 00:00:00', 'Dari Pabrik Tangerang'),
(4, 'IDM-GOR', 125, 0, 175, 1, '2024-07-05 18:08:59', 0, '0000-00-00 00:00:00', 'Dari Gudang Tanjung Priok'),
(5, 'SP-BBR', 70, 0, 245, 1, '2024-07-05 18:12:30', 0, '0000-00-00 00:00:00', 'Dari Pabrik Tangerang'),
(6, 'CTT-ORI', 10, 0, 135, 1, '2024-07-05 18:23:36', 0, '0000-00-00 00:00:00', 'Barang Retur');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nama_lengkap` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `nama_lengkap`) VALUES
(1, 'wuffenbauer', '$2y$10$7reu0PDYmvYAj8Jot0SPyefOpBsNjmCXpmDPiFSCAD8x2YYF4Z.Xu', 'Amirah Puspadewi'),
(2, 'amskyyy', '$2y$10$7reu0PDYmvYAj8Jot0SPyefOpBsNjmCXpmDPiFSCAD8x2YYF4Z.Xu', 'Siberian Amsky'),
(3, 'truman_black', 'chugchugchug', 'Matty Healy'),
(4, 'rass1975', '$2a$10$SIY5CvwQbZFMA8MU2.Xt..0pPnMmRm39miZuLj1Xotpg7tOoikG9u', 'Ross MacDonald'),
(5, 'bedford.danes', '$2a$10$PY7v5/vBOcfvGQb755ULF.FJfOYvrgb2Xs1cWiIJpw1rMXGqAgO8q', 'George Daniel'),
(6, 'adam1975', '$2a$10$J9lApYh.kajZFznnK9JE9ep0nH1FXZE4OpTLyE.AC3j9R7X6fa1Dq', 'Adam Hann'),
(7, 'richaadeb', '$2a$10$KplmObMOZ7d/e3wG6qIDZeFlCTyfz5U2UsdH5pkqjXDONVFQ26z86', 'Richard EB'),
(8, 'familyjules', '$2a$10$LJC6DLJI4IeScIhUX7CP9uyTiBBc0knieY8wvgh7qtI9dLCrteHCu', 'Jules Conroy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daftar_karyawan`
--
ALTER TABLE `daftar_karyawan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_departemen`
--
ALTER TABLE `master_departemen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_jabatan`
--
ALTER TABLE `master_jabatan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_kategori`
--
ALTER TABLE `master_kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_produk`
--
ALTER TABLE `master_produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stok`
--
ALTER TABLE `stok`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daftar_karyawan`
--
ALTER TABLE `daftar_karyawan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id table', AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `master_departemen`
--
ALTER TABLE `master_departemen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `master_jabatan`
--
ALTER TABLE `master_jabatan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `master_kategori`
--
ALTER TABLE `master_kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `master_produk`
--
ALTER TABLE `master_produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `stok`
--
ALTER TABLE `stok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
