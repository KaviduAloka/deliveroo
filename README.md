# 🚀 Deliveroo – React Native Application

Deliveroo is a cross-platform mobile application built with **React Native (0.81.4)** and **React (19.1.0)**.  
It allows users to browse restaurants, place food orders, and track deliveries in real time.

---
## 📂 Project Structure

deliveroo/<br>
├─ __tests__/ # Component unit testing<br> 
├─ src/<br>
│ ├─ assets/ # Images<br>
│ ├─ components/ # Reusable UI components<br>
│ ├─ constants/ # Application constants<br>
│ ├─ features/ # Screen components<br>
│ ├─ navigation/ # Navigation stacks and tabs<br>
│ ├─ services/ # API / Firebase integrations<br>
│ ├─ store/ # Redux Toolkit slices & sagas<br>
│ └─ themes/ # Common stylings<br>
├─ App.tsx / App.js<br>
└─ package.json<br>

---

## 🛠️ Tech Stack

| Category              | Library / Version                          |
|-----------------------|---------------------------------------------|
| **Core**              | React Native **0.81.4**, React **19.1.0**   |
| **Navigation**        | @react-navigation/native **7.1.17**, @react-navigation/native-stack **7.3.26**, react-native-screens **4.16.0**, react-native-safe-area-context **5.6.1** |
| **State Management**  | @reduxjs/toolkit **2.9.0**, react-redux **9.2.0**, redux-saga **1.3.0** |
| **Networking**        | axios **1.12.2** |
| **Image caching**     | react-native-fast-image **8.6.3** |
| **Firebase**          | @react-native-firebase/app & auth **23.3.1** |
| **Auth / Social**     | @react-native-google-signin/google-signin **16.0.0** |
| **Testing**           | jest **29.6.3**, @testing-library/react-native **13.3.3**, react-test-renderer **19.1.0** |
| **TypeScript**        | typescript **5.8.3** |
| **Lint & Format**     | eslint **8.19.0**, prettier **2.8.8** |

Node engine: **>=20**

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js ≥20**
- npm or yarn
- Android Studio & Xcode (for Android/iOS builds)

### Steps
```bash
git clone https://github.com/KaviduAloka/deliveroo.git
cd deliveroo
npm install        # or yarn
npm start          # starts Metro bundler

```

### Run on devices/emulators
```
npm run android    # Android
npm run ios        # iOS
```

### 📜 Scripts
From package.json:

|Script               | Description|
|---------------------|------------|
|`npm run android`    |Build & run app on Android emulator/device|
|`npm run ios` | Build & run app on iOS simulator|
|`npm run test`|Run tests with Jest|

### Improvements that could make
* Move sensitive information to `.env` file