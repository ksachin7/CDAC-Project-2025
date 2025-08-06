# eValuation

This project is a full-stack interview platform designed to facilitate online technical interviews. It includes a variety of features aimed at enhancing the interview experience for both candidates and interviewers.

### Core Functionalities

* User Authentication (Candidate/Interviewer)
* Video Call (Join/Leave, Toggle Audio/Video)
* Schedule Interview
* Email Notifications
* Chat Box (Real-time)
* Code Editor (Monaco with run option)
* UI Toggles (Open/close chat and code editor)
* Interview Room (Session joining)

## **Architecture Overview**

![architecture-diag.](./frontend/public/architecture.diag.png)

### Project Workflow

![auth-flow](./frontend/public/auth.png)
<!-- 
## **Testing**

* ✅ Unit Tests (Jest for frontend, JUnit for backend)
* ✅ Integration Tests for APIs
* ✅ UI/UX responsiveness and error handling

-->

## 💡 Future Enhancements

* Add **recording functionality** for interviews (advanced)
* Add **code execution API** using services like [Judge0](https://judge0.com/) or Docker-sandbox
* Add **notifications** (Web Push/Toast)
* Support **interview feedback forms**
* Use **OAuth login (Google/LinkedIn)**

## Summary of Tech Requirements

| Module                | Tech Stack                        |
| --------------------- | --------------------------------- |
| Frontend UI           | React.js, TailwindCSS             |
| Video Call            | ZEGOCLOUD                         |
| Real-Time (Chat etc.) | ZEGOCLOUD                         |
| Backend API           | Spring Boot, REST, Spring data    |
| DB                    | PostgreSQL/H2                     |
| Auth                  | Spring Security + JWT             |
| Email                 | JavaMailSender                    |
| Code Editor           | Monaco Editor, Judge0, WebSocket  |
| Deployment            | Docker, Render                    |

---

## Installation and Start Instructions

## Prerequisites

Before you begin, make sure the following tools are installed on your system:

### Development Tools

* **Node.js** (v14 or later)  [Download Node.js](https://nodejs.org/)
* **npm** (comes with Node.js)
* **Java** (JDK 17 or later)  [Download JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
* **Maven**  [Download Maven](https://maven.apache.org/download.cgi)
* **MySQL** (or your preferred database)  [Download MySQL](https://dev.mysql.com/downloads/)

<!-- ### 🐳 Containerization -->

* **Docker**  [Install Docker](https://docs.docker.com/get-docker/)
<!-- * **Docker Compose**  [Install Docker Compose](https://docs.docker.com/compose/install/) -->

### Clone the Repository

```bash
git clone https://github.com/ksachin7/CDAC-Project-2025.git
cd CDAC-Project-2025
```

<!-- ---

#### Build and Run the Backend

Using Maven:

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

---

### Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

This will start the React app on [http://localhost:5173](http://localhost:5173).

---
 -->

### 🐳 Pull Docker Images

```bash
docker pull ksachin7/evaluation-frontend:latest
docker pull ksachin7/evaluation-backend:latest
```

---

### 🐳 Build and Start Services

```bash
docker-compose up --build
```

This command will:

* Build the latest images for all services
* Start the containers as defined in `docker-compose.yml`

---

See [Contribution Guide](/CONTRIBUTING.md)
