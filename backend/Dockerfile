FROM maven:3-eclipse-temurin-17 AS build
WORKDIR /workspace
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-alpine
WORKDIR /app
COPY --from=build /workspace/target/backend-0.0.1-SNAPSHOT.jar ./demo.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]
