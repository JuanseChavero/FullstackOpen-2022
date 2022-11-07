```mermaid
sequenceDiagram
    participant Browser
    participant Server
    Note over Browser: User submits note and default submit behavior is prevented
    Browser->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note over Server: Crates a new note and adds it to notes
```