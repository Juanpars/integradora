-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-08-2024 a las 01:11:18
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `micrositio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `id` int(11) NOT NULL,
  `unidad` varchar(50) NOT NULL,
  `responsable` varchar(50) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`id`, `unidad`, `responsable`, `id_usuario`, `updated_at`) VALUES
(1, 'Finanzas', 'Marta Gómez', 1, '2024-08-20 23:31:48'),
(2, 'Sistemas Web', 'Luis Rodríguez', 2, '2024-08-20 21:08:33'),
(3, 'Redes', 'Marta Manzano', 1, '2024-08-21 01:19:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formatos`
--

CREATE TABLE `formatos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `tipo` varchar(5) NOT NULL,
  `revision` int(11) NOT NULL,
  `id_area` int(11) NOT NULL,
  `fecha_efectividad` date NOT NULL,
  `referencia` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL,
  `fecha_baja` date DEFAULT NULL,
  `documento` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `formatos`
--

INSERT INTO `formatos` (`id`, `nombre`, `tipo`, `revision`, `id_area`, `fecha_efectividad`, `referencia`, `status`, `fecha_baja`, `documento`, `updated_at`) VALUES
(1, 'Formato de Seguridad', 'PDF', 1, 1, '2023-08-01', 'REF-001', 'baja', NULL, 'biblia.pdf', '2024-08-21 01:16:07'),
(2, 'Formato de Ingreso', 'DOC', 2, 2, '2023-08-10', 'REF-002', 'alta', '2024-01-15', 'biblia.pdf', '2024-08-21 22:56:07'),
(3, 'Formato de Evaluación', 'ZIP', 2, 2, '2023-08-15', 'REF-004', 'alta', NULL, 'biblia.pdf', '2024-08-21 01:16:12'),
(5, 'Anaid Limas', 'PDF', 1, 1, '2024-08-28', '1234', 'alta', '2024-08-28', 'biblia.pdf', '2024-08-21 22:56:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instrucciones_formatos`
--

CREATE TABLE `instrucciones_formatos` (
  `id` int(11) NOT NULL,
  `id_formato` int(11) NOT NULL,
  `id_instrucciondetrabajo` int(11) NOT NULL,
  `documento` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `instrucciones_formatos`
--

INSERT INTO `instrucciones_formatos` (`id`, `id_formato`, `id_instrucciondetrabajo`, `documento`, `updated_at`) VALUES
(1, 1, 1, 'biblia.pdf', '2024-08-21 01:15:56'),
(2, 2, 2, 'biblia.pdf', '2024-08-21 01:15:59'),
(3, 3, 4, 'biblia.pdf', '2024-08-21 01:16:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `its`
--

CREATE TABLE `its` (
  `id` int(11) NOT NULL,
  `fecha_efectividad` date NOT NULL,
  `id_area` int(11) NOT NULL,
  `referencia` varchar(50) NOT NULL,
  `revision` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `fecha_baja` date DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `documento` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `its`
--

INSERT INTO `its` (`id`, `fecha_efectividad`, `id_area`, `referencia`, `revision`, `nombre`, `titulo`, `fecha_baja`, `status`, `documento`, `updated_at`) VALUES
(1, '2023-08-01', 1, 'IT-001', 1, 'Instrucción de Seguridad', 'Procedimiento de seguridad', NULL, 'alta', 'biblia.pdf', '2024-08-21 01:15:40'),
(2, '2023-08-10', 2, 'IT-002', 2, 'Instrucción de Sistemas', 'Procedimiento de sistemas', '2024-01-15', 'alta', 'biblia.pdf', '2024-08-21 01:15:43'),
(3, '2024-08-23', 3, 'IT-002', 2, 'Instrucción de Finanzas', 'Procedimiento de finanzas', NULL, 'revicion', 'biblia.pdf', '2024-08-21 01:15:45'),
(4, '2024-08-29', 1, '2241', 1, 'Anaid Limas', 'ada', '2024-08-29', 'alta', 'biblia.pdf', '2024-08-21 01:15:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `procedimientos`
--

CREATE TABLE `procedimientos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `revision` int(11) NOT NULL,
  `id_area` int(11) NOT NULL,
  `fecha_efectividad` date NOT NULL,
  `responsable` varchar(30) NOT NULL,
  `status` varchar(20) NOT NULL,
  `referencia` varchar(50) NOT NULL,
  `requisitos` varchar(50) NOT NULL,
  `tipo` varchar(5) NOT NULL,
  `fecha_baja` date DEFAULT NULL,
  `documento` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `procedimientos`
--

INSERT INTO `procedimientos` (`id`, `titulo`, `nombre`, `revision`, `id_area`, `fecha_efectividad`, `responsable`, `status`, `referencia`, `requisitos`, `tipo`, `fecha_baja`, `documento`, `updated_at`) VALUES
(1, 'Auditoría Interna', 'Procedimiento de Auditoría', 1, 1, '2023-08-01', 'Juan Pérez', 'alta', 'PRO-001', 'Requisito de auditoría', 'INT', NULL, 'biblia.pdf', '2024-08-21 01:15:21'),
(2, 'Soporte Técnico', 'Procedimiento de Soporte', 2, 2, '2023-08-10', 'María López', 'baja', 'PRO-002', 'Requisito de soporte', 'EXT', '2024-01-15', 'biblia.pdf', '2024-08-21 01:15:23'),
(3, 'Gestión de Pagos', 'Procedimiento de Pagos', 3, 2, '2023-08-15', 'Carlos García', 'alta', 'PRO-003', 'Requisito de pagos', 'INT', NULL, 'biblia.pdf', '2024-08-21 01:15:27'),
(4, 'ana', 'hola', 1, 1, '2024-08-16', 'Admin', 'alta', '12345', 'ninguno', 'PDF', '2024-08-22', 'biblia.pdf', '2024-08-21 01:15:30'),
(5, 'dasd', 'asd', 1, 1, '2024-08-15', '2', 'revicion', '1234', 'ninggguno', 'PDF', '2024-08-22', 'biblia.pdf', '2024-08-21 01:15:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `procedimientos_formatos`
--

CREATE TABLE `procedimientos_formatos` (
  `id` int(11) NOT NULL,
  `id_procedimiento` int(11) NOT NULL,
  `id_formato` int(11) NOT NULL,
  `documento` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `procedimientos_formatos`
--

INSERT INTO `procedimientos_formatos` (`id`, `id_procedimiento`, `id_formato`, `documento`, `updated_at`) VALUES
(1, 1, 1, 'biblia.pdf', '2024-08-21 01:15:04'),
(2, 2, 2, 'biblia.pdf', '2024-08-21 01:15:07'),
(3, 3, 2, 'biblia.pdf', '2024-08-21 01:15:10'),
(5, 2, 1, 'biblia.pdf', '2024-08-21 01:15:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `procedimientos_instrucciones`
--

CREATE TABLE `procedimientos_instrucciones` (
  `id` int(11) NOT NULL,
  `id_procedimiento` int(11) NOT NULL,
  `id_instrucciondetrabajo` int(11) NOT NULL,
  `documento` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `procedimientos_instrucciones`
--

INSERT INTO `procedimientos_instrucciones` (`id`, `id_procedimiento`, `id_instrucciondetrabajo`, `documento`, `updated_at`) VALUES
(1, 1, 1, 'biblia.pdf', '2024-08-21 01:14:50'),
(2, 2, 2, 'biblia.pdf', '2024-08-21 01:14:53'),
(3, 3, 3, 'biblia.pdf', '2024-08-21 01:14:55'),
(22, 2, 3, 'biblia.pdf', '2024-08-21 01:14:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasena` varchar(8) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `tipo`, `correo`, `contrasena`, `updated_at`) VALUES
(1, 'Juan Pérez', 'admin', 'juan.perez@example.com', 'password', '2024-08-19 02:25:22'),
(2, 'María López', 'admin', 'maria.lopez@example.com', 'password', '2024-08-20 23:26:27'),
(3, 'Mario broos', 'user', 'mario@gmail.com', '1234', '2024-08-21 22:52:22'),
(7, 'Brayan', 'admin', 'brayan@gmail.com', '1234', '2024-08-21 01:45:51'),
(8, 'Juanpa', 'responsable', 'juancarlos1234@gmail.com', '1234', '2024-08-21 01:49:15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `areas_ibfk_1` (`id_usuario`);

--
-- Indices de la tabla `formatos`
--
ALTER TABLE `formatos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `formatos_ibfk_1` (`id_area`);

--
-- Indices de la tabla `instrucciones_formatos`
--
ALTER TABLE `instrucciones_formatos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `instrucciones_formatos_ibfk_1` (`id_formato`),
  ADD KEY `instrucciones_formatos_ibfk_2` (`id_instrucciondetrabajo`);

--
-- Indices de la tabla `its`
--
ALTER TABLE `its`
  ADD PRIMARY KEY (`id`),
  ADD KEY `its_ibfk_1` (`id_area`);

--
-- Indices de la tabla `procedimientos`
--
ALTER TABLE `procedimientos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `procedimientos_ibfk_1` (`id_area`);

--
-- Indices de la tabla `procedimientos_formatos`
--
ALTER TABLE `procedimientos_formatos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `procedimientos_formatos_ibfk_1` (`id_procedimiento`),
  ADD KEY `procedimientos_formatos_ibfk_2` (`id_formato`);

--
-- Indices de la tabla `procedimientos_instrucciones`
--
ALTER TABLE `procedimientos_instrucciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `procedimientos_instrucciones_ibfk_1` (`id_instrucciondetrabajo`),
  ADD KEY `procedimientos_instrucciones_ibfk_2` (`id_procedimiento`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `formatos`
--
ALTER TABLE `formatos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `instrucciones_formatos`
--
ALTER TABLE `instrucciones_formatos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `its`
--
ALTER TABLE `its`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `procedimientos`
--
ALTER TABLE `procedimientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `procedimientos_formatos`
--
ALTER TABLE `procedimientos_formatos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `procedimientos_instrucciones`
--
ALTER TABLE `procedimientos_instrucciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `areas`
--
ALTER TABLE `areas`
  ADD CONSTRAINT `areas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `formatos`
--
ALTER TABLE `formatos`
  ADD CONSTRAINT `formatos_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `areas` (`id`);

--
-- Filtros para la tabla `instrucciones_formatos`
--
ALTER TABLE `instrucciones_formatos`
  ADD CONSTRAINT `instrucciones_formatos_ibfk_1` FOREIGN KEY (`id_formato`) REFERENCES `formatos` (`id`),
  ADD CONSTRAINT `instrucciones_formatos_ibfk_2` FOREIGN KEY (`id_instrucciondetrabajo`) REFERENCES `its` (`id`);

--
-- Filtros para la tabla `its`
--
ALTER TABLE `its`
  ADD CONSTRAINT `its_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `areas` (`id`);

--
-- Filtros para la tabla `procedimientos`
--
ALTER TABLE `procedimientos`
  ADD CONSTRAINT `procedimientos_ibfk_1` FOREIGN KEY (`id_area`) REFERENCES `areas` (`id`);

--
-- Filtros para la tabla `procedimientos_formatos`
--
ALTER TABLE `procedimientos_formatos`
  ADD CONSTRAINT `procedimientos_formatos_ibfk_1` FOREIGN KEY (`id_procedimiento`) REFERENCES `procedimientos` (`id`),
  ADD CONSTRAINT `procedimientos_formatos_ibfk_2` FOREIGN KEY (`id_formato`) REFERENCES `formatos` (`id`);

--
-- Filtros para la tabla `procedimientos_instrucciones`
--
ALTER TABLE `procedimientos_instrucciones`
  ADD CONSTRAINT `procedimientos_instrucciones_ibfk_1` FOREIGN KEY (`id_instrucciondetrabajo`) REFERENCES `its` (`id`),
  ADD CONSTRAINT `procedimientos_instrucciones_ibfk_2` FOREIGN KEY (`id_procedimiento`) REFERENCES `procedimientos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
