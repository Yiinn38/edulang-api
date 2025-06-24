-- Datos iniciales
-- Admin user
INSERT INTO Users (email, password, role) VALUES 
('admin@edulang.com', 'admin123', 'admin');

-- Sample teachers
INSERT INTO Users (email, password, role) VALUES 
('teacher1@edulang.com', 'teacher1123', 'teacher'),
('teacher2@edulang.com', 'teacher2123', 'teacher');

INSERT INTO Teachers (userId, firstName, lastName, specialization, availability) VALUES
(2, 'María', 'Gómez', 'Inglés avanzado', 'Lunes a Viernes, 8am-12pm'),
(3, 'Carlos', 'López', 'Francés básico', 'Martes y Jueves, 2pm-6pm');

-- Sample students
INSERT INTO Users (email, password, role) VALUES 
('student1@edulang.com', 'student1123', 'student'),
('student2@edulang.com', 'student2123', 'student');

INSERT INTO Students (userId, enrollmentNumber, firstName, lastName) VALUES
(4, 'STU2023001', 'Ana', 'Martínez'),
(5, 'STU2023002', 'Juan', 'Pérez');

-- Sample courses
INSERT INTO Courses (name, description, level, language, schedule, capacity, teacherId) VALUES
('Inglés Básico', 'Curso introductorio de inglés', 'Básico', 'Inglés', 'Lunes y Miércoles 4pm-6pm', 20, 1),
('Francés Intermedio', 'Curso de francés para nivel intermedio', 'Intermedio', 'Francés', 'Martes y Jueves 5pm-7pm', 15, 2);

-- Sample enrollments
INSERT INTO Enrollments (studentId, courseId, enrollmentDate) VALUES
(1, 1, '2023-01-10'),
(2, 2, '2023-01-15');

-- Sample grades
INSERT INTO Grades (enrollmentId, evaluationType, score, evaluationDate) VALUES
(1, 'Examen parcial', 85.5, '2023-02-15'),
(2, 'Examen parcial', 78.0, '2023-02-16');

-- Sample payments
INSERT INTO Payments (studentId, amount, paymentType, paymentDate, status) VALUES
(1, 150.00, 'registration', '2023-01-05', 'paid'),
(2, 150.00, 'registration', '2023-01-12', 'paid');