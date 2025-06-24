# 🚀 CÓMO EJECUTAR EL PROYECTO

1. Clonar el repositorio.
2. Colocar el **.env** en la raíz del proyecto.
3. Tener Docker instalado y abierto.
4. Ejecutar el siguiente comando en la raíz del proyecto:

```
docker-compose up --build
```

5. El backend estará disponible en **http://localhost:3000** y el MySQL en **localhost:3306**

---

### 📦 Endpoints principales 📦

**🔐 Autenticación**

- `POST /api/auth/login` - Iniciar sesión

**👨‍💼 Administrador**

- `GET /api/admin/students` - Obtener todos los estudiantes
- `POST /api/admin/students` - Crear nuevo estudiante
- `GET /api/admin/teachers` - Obtener todos los docentes
- `POST /api/admin/teachers` - Crear nuevo docente
- `GET /api/admin/courses` - Obtener todos los cursos
- `GET /api/admin/enrollments` - Obtener todas las matrículas
- `GET /api/admin/grades` - Obtener todas las calificaciones
- `GET /api/admin/payments` - Obtener todos los pagos

**🎓 Estudiantes**

- `GET /api/students/:id` - Obtener perfil de estudiante
- `PUT /api/students/:id` - Actualizar perfil de estudiante

**👩‍🏫 Docentes**

- `GET /api/teachers/:id` - Obtener perfil de docente
- `PUT /api/teachers/:id` - Actualizar perfil de docente
- `GET /api/teachers/:id/courses` - Obtener cursos del docente

**📚 Cursos**

- `GET /api/courses` - Obtener todos los cursos
- `GET /api/courses/:id` - Obtener curso por ID
- `POST /api/courses` - Crear nuevo curso
- `PUT /api/courses/:id` - Actualizar curso
- `DELETE /api/courses/:id` - Eliminar curso

**📝 Matrículas**

- `GET /api/enrollments` - Obtener todas las matrículas
- `POST /api/enrollments` - Crear nueva matrícula
- `PUT /api/enrollments/:id/status` - Actualizar estado de matrícula
- `DELETE /api/enrollments/:id` - Eliminar matrícula

**📊 Calificaciones**

- `GET /api/grades/enrollment/:enrollmentId` - Obtener calificaciones por matrícula
- `POST /api/grades` - Crear nueva calificación
- `PUT /api/grades/:id` - Actualizar calificación
- `DELETE /api/grades/:id` - Eliminar calificación

**💰 Pagos**

- `GET /api/payments/student/:studentId` - Obtener pagos por estudiante
- `POST /api/payments` - Crear nuevo pago
- `PUT /api/payments/:id/status` - Actualizar estado de pago
- `DELETE /api/payments/:id` - Eliminar pago

---

### 🔑 Credenciqales iniciales 🔑

- Admin `admin@edulang.com` / `admin123`
- Teacher1 `teacher1@edulang.com` / `teacher123`
- Teacher2 `teacher2@edulang.com` / `teacher2123`
- Student1 `student1@edulang.com` / `student1123`
- Student2 `student2@edulang.com` / `student2123`
