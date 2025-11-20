-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS `dbSCGI`

-- Cria a tabela User
CREATE TABLE IF NOT EXISTS `tbUser` (
    `user_id_pk` bigint NOT NULL AUTO_INCREMENT,
    `user_fullname` varchar(255) NOT NULL,
    `user_password` varchar(200) NOT NULL,
    `user_email` varchar(254) NOT NULL,
    `user_cpf` varchar(11) NOT NULL,
    `user_tel` varchar(13) NOT NULL,
    PRIMARY KEY (`user_id_pk`),
    UNIQUE KEY `user_email` (`user_email`),
    UNIQUE KEY `user_cpf` (`user_cpf`),
    UNIQUE KEY `user_tel` (`user_tel`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci

-- Cria a tabela Goal
CREATE TABLE IF NOT EXISTS `tbGoal` (
    `goal_id` bigint NOT NULL AUTO_INCREMENT,
    `goal_title` varchar(255) NOT NULL,
    `goal_value` decimal(10, 2) NOT NULL,
    `goal_description` longtext,
    `goal_end_date` date NOT NULL,
    `goal_status` varchar(4) NOT NULL,
    `goal_user_id_fk` bigint NOT NULL,
    PRIMARY KEY (`goal_id`),
    UNIQUE KEY `goal_title` (`goal_title`),
    KEY `tbGoal_goal_user_id_fk_9b20d002_fk_tbUser_user_id_pk` (`goal_user_id_fk`),
    CONSTRAINT `tbGoal_goal_user_id_fk_9b20d002_fk_tbUser_user_id_pk` FOREIGN KEY (`goal_user_id_fk`) REFERENCES `tbUser` (`user_id_pk`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci

-- Cria a tabela Transaction
CREATE TABLE IF NOT EXISTS `tbTransaction` (
    `transaction_id_pk` bigint NOT NULL AUTO_INCREMENT,
    `transaction_value` decimal(10, 2) NOT NULL,
    `transaction_type` varchar(3) NOT NULL,
    `transaction_date` date NOT NULL,
    `transaction_description` longtext,
    `transaction_category` varchar(20) NOT NULL,
    `transaction_user_id_fk` bigint NOT NULL,
    PRIMARY KEY (`transaction_id_pk`),
    KEY `tbTransaction_transaction_user_id__056eace8_fk_tbUser_us` (`transaction_user_id_fk`),
    CONSTRAINT `tbTransaction_transaction_user_id__056eace8_fk_tbUser_us` FOREIGN KEY (`transaction_user_id_fk`) REFERENCES `tbUser` (`user_id_pk`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci