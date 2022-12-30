```mermaid
erDiagram
  Position {
    float x
    float y
    float altitude
    timestamp timestamp PK
    string droneSerialNumber FK
  }

  Drone {
    string serialNumber PK
    string model
    string manufacturer
    string mac
    string ipv4
    string ipv4
    string firmware
  }

  Pilot {
    string id PK
    string firstName
    string lastName
    string phoneNumber
    string email
    timestamp createdAt
  }

  Position }|--|| Drone : has-been-at
  Drone ||--o{ Pilot : owned-by

```
