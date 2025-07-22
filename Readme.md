# Task Management Tool

A comprehensive microservices-based task management system built with Spring Boot backend services and React frontend.

## 🏗️ Architecture

This project follows a microservices architecture with the following components:

- **Frontend**: React.js application with Redux Toolkit for state management
- **Backend Services**:
  - Eureka Server (Service Discovery)
  - Gateway Server (API Gateway)
  - User Service (Authentication & User Management)
  - Task Service (Task Management)
  - Task Submission Service (Submission Handling)

## 📁 Project Structure

```
TaskManeger/
├── eureka-Server/          # Service discovery server
├── gatewayserver/          # API Gateway
├── user-service/           # User authentication and management
├── task-service/           # Task CRUD operations
└── task-submission-service/ # Task submission handling

frontend/
├── src/
│   ├── ReduxToolkit/       # Redux state management
│   ├── pages/Auth/         # Authentication pages
│   └── Api/                # API configuration
└── public/                 # Static assets
```

## 🚀 Features

### Backend Features
- **User Authentication**: JWT-based authentication with login/signup
- **Task Management**: Create, read, update, and delete tasks
- **Submission System**: Submit tasks with GitHub links
- **Microservices**: Scalable architecture with service discovery
- **Security**: Spring Security with password encryption

### Frontend Features
- **Responsive UI**: Built with React and Tailwind CSS
- **State Management**: Redux Toolkit for efficient state handling
- **Authentication**: Login/Register with JWT token management
- **Task Submission**: Submit tasks with GitHub integration
- **Modern Design**: Gradient-based UI with custom styling

## 🛠️ Technologies Used

### Backend
- Java 17+
- Spring Boot
- Spring Security
- Spring Cloud (Eureka, Gateway)
- JPA/Hibernate
- JWT Authentication
- Maven

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Axios
- React Router

## 📋 Prerequisites

- Java 17 or higher
- Node.js 16+ and npm
- Maven
- Git

## 🔧 Installation & Setup

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Task-Management-Tool/Task-Manegment/TaskManeger
   ```

2. **Start Eureka Server**
   ```bash
   cd eureka-Server
   mvn spring-boot:run
   ```

3. **Start Gateway Server**
   ```bash
   cd gatewayserver
   mvn spring-boot:run
   ```

4. **Start User Service**
   ```bash
   cd user-service
   mvn spring-boot:run
   ```

5. **Start Task Service**
   ```bash
   cd task-service
   mvn spring-boot:run
   ```

6. **Start Task Submission Service**
   ```bash
   cd task-submission-service
   mvn spring-boot:run
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## 🔌 API Endpoints

### Authentication
- `POST /auth/signin` - User login
- `POST /auth/signup` - User registration

### Submissions
- `POST /api/submissions` - Submit a task
- `GET /api/submissions/{submissionId}` - Get submission by ID
- `GET /api/submissions` - Get all submissions

## 🎨 UI Components

The frontend features a modern design with:
- Custom gradient backgrounds
- Responsive design with Tailwind CSS
- Authentication forms with smooth animations
- Task submission interface
- Real-time state updates with Redux

## 📱 Usage

1. **Register/Login**: Create an account or login with existing credentials
2. **Browse Tasks**: View available tasks in the system
3. **Submit Tasks**: Submit completed tasks with GitHub repository links
4. **Track Progress**: Monitor submission status and feedback

## 🔒 Security Features

- JWT token-based authentication
- Password encryption with BCrypt
- Secure API endpoints
- CORS configuration for frontend integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Vimuktha Heshan

## 🐛 Known Issues

- Ensure all microservices are running before starting the frontend
- JWT tokens are stored in localStorage (consider more secure alternatives for production)

## 🔮 Future Enhancements

- Real-time notifications
- File upload support
- Advanced task filtering and search
- Role-based access control
- Task assignment and collaboration features