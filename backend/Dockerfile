# Stage 1: Build the application
FROM maven:3.8.5-openjdk-17 AS builder

# Set the working directory
WORKDIR /app

# Copy the Maven configuration files
COPY pom.xml ./
COPY src ./src

# Show contents of /app before building
# RUN ls -l /app && ls -l /app/src || echo "src folder missing"

# Build the application
RUN mvn clean package -DskipTests

RUN ls -l /app/target

# Stage 2: Create the final image
FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY --from=builder /app/target/*.jar eValuation.jar

# RUN test -f /app/target/*.jar

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD ["java", "-jar", "eValuation.jar"]