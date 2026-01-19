# SMART GARDEN AIoT

An intelligent, fully automated plant care system combining Internet of Things (IoT) for monitoring and control with Artificial Intelligence (AI) for plant health diagnostics.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Hardware Components](#hardware-components)
- [Software Stack](#software-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Overview

SMART GARDEN AIoT is designed to revolutionize urban farming and home gardening by providing a completely autonomous plant care solution. Perfect for busy city dwellers or urban agriculture models, this system combines the power of IoT sensors for real-time environmental monitoring with AI-powered disease detection to make gardening simpler, more efficient, and smarter than ever before.

### Key Objectives

- **Full Automation**: Eliminate manual watering and lighting control
- **Intelligent Monitoring**: Real-time environmental data collection and analysis
- **Disease Prevention**: Early detection of plant diseases through AI-powered image analysis
- **Remote Access**: Monitor and control your garden from anywhere via mobile app
- **Data-Driven Insights**: Historical data tracking for optimized plant care

## Features

### Automated Control
- **Smart Watering**: Automatic irrigation based on soil moisture levels
- **Intelligent Lighting**: Auto-adjust grow lights based on ambient light conditions
- **Threshold-based Actions**: Customizable triggers for all automated systems

### Real-time Monitoring
- Soil moisture (capacitive sensor for longevity)
- Air temperature and humidity
- Soil pH levels
- Light intensity
- All parameters visualized on mobile dashboard

### AI-Powered Plant Health
- Automated leaf image capture via ESP32-CAM
- CNN-based disease detection model
- Real-time disease alerts with confidence scores
- Early intervention recommendations

### Mobile Application
- Intuitive dashboard with real-time data
- Historical data visualization with charts
- Push notifications for critical events
- Manual override controls
- Disease detection history

## System Architecture

```
┌─────────────────┐
│  Mobile App     │
│ (User Interface)│
└────────┬────────┘
         │
    ┌────▼────┐
    │ Server  │
    │ AI/DB   │
    └────┬────┘
         │
    ┌────▼────────────────────────┐
    │    ESP32 Main Controller    │
    └─┬───────────────────────┬───┘
      │                       │
┌─────▼──────┐         ┌──────▼──────┐
│  Sensors   │         │  Actuators  │
│  - Soil    │         │  - Pump     │
│  - Air     │         │  - Lights   │
│  - pH      │         │  - Relay    │
│  - Light   │         │             │
│  - Camera  │         │             │
└────────────┘         └─────────────┘
```

### System Components Overview

| Component | Primary Role | Interacts With |
|-----------|-------------|----------------|
| ESP32 | Central processing unit, local control logic | Sensors, Relay Module, Server |
| Sensor System | Environmental data collection (soil, air, light) | ESP32 |
| Actuators | Physical actions (watering, lighting) | Relay Module |
| Camera Module | Leaf image capture for disease diagnosis | ESP32 |
| Server (AI/Database) | Image analysis via AI, historical data storage | ESP32, Mobile App |
| Mobile App | User monitoring and control interface | User, Server |

## Hardware Components

### Central Controller
- **ESP32 Microcontroller**
  - Integrated Wi-Fi & Bluetooth
  - High performance for multi-sensor processing
  - Low power consumption
  - GPIO pins for sensor/actuator control

### Sensor Suite

#### Capacitive Soil Moisture Sensor
- **Why Capacitive? ** Unlike resistive sensors that corrode quickly due to electrolysis when DC current flows through electrodes in moist soil, capacitive sensors measure moisture without direct electrical contact with the soil, ensuring long-term accuracy and reliability.

#### DHT11/22 Temperature & Humidity Sensor
- Monitors microclimate around plants
- Detects unfavorable conditions (excessive heat/dryness)

#### Soil pH Sensor
- Critical for nutrient uptake
- Monitors soil acidity/alkalinity levels

#### Light Sensor (LDR or BH1750)
- Measures light intensity
- Triggers supplemental lighting when needed

#### ESP32-CAM Module
- Dedicated camera for automated leaf photography
- Scheduled image capture for AI analysis
- Disease symptom detection

#### Display Module
- Real-time parameter visualization
- Local system status monitoring

### Actuators

#### Mini Water Pump
- Executes watering commands
- Typically 12V DC operation

#### LED Grow Lights
- Provides optimal light spectrum for photosynthesis
- Compensates for insufficient natural light

#### Relay Module
**Critical Safety Component**:  ESP32 operates at low voltage (3.3V/5V) and cannot directly control high-voltage devices (12V pump, 220V lights). The relay acts as a smart switch, allowing low-voltage control signals from ESP32 to safely operate independent high-voltage circuits.

## Software Stack

### Embedded Software (ESP32)
- **Language**: Python 
- **Libraries**: (Update later)

### Backend Server
- **AI Model**:  Convolutional Neural Network (CNN)
  - Specialized architecture for image pattern recognition
  - Trained on plant disease dataset
  - Identifies leaf spots, mold, yellowing, etc.
- **Database**: Time-series data storage
- **API**: RESTful endpoints for mobile app

### Mobile Application
- Real-time data dashboard
- Push notification system
- Remote control interface
- Historical data visualization

### Communication Protocols
- **MQTT**:  Lightweight protocol optimized for IoT
  - Minimal bandwidth usage
  - Efficient on unstable connections
  - Ideal for sensor data streaming
- **HTTP/HTTPS**: Image upload and API calls

## Installation

### Hardware Setup

1. **Connect Sensors to ESP32**
   ```
   Soil Moisture -> GPIO 34
   DHT22 -> GPIO 4
   pH Sensor -> GPIO 35
   Light Sensor -> GPIO 36
   ```

2. **Connect Actuators via Relay**
   ```
   Relay IN1 (Pump) -> GPIO 26
   Relay IN2 (Light) -> GPIO 27
   ```

3. **Power Supply**
   - ESP32: 5V USB or regulated supply
   - Pump: 12V DC adapter
   - Grow Light: As per specifications

### Software Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/Tdat10052499/smart-garden-aiot.git
   cd smart-garden-aiot
   ```

2. **ESP32 Firmware**
   ```bash
   cd firmware
   # Configure WiFi credentials in config.h
   # Upload to ESP32 using Arduino IDE or PlatformIO
   ```

3. **Server Setup**
   ```bash
   cd server
   pip install -r requirements.txt
   # Configure database connection
   python app.py
   ```

4. **Mobile App**
   ```bash
   cd mobile-app
   npm install
   # Configure API endpoint
   npm run start
   ```

## Usage

### Automatic Operation Loop

1. **Data Collection**:  Sensors continuously send parameters to ESP32
2. **Analysis & Decision**: ESP32 compares data against preset thresholds
   - Example: Soil moisture < 40% triggers watering
3. **Action**: ESP32 signals relay to activate pump or grow light

### AI "Doctor" Function

1. **Image Capture**: Camera automatically photographs leaves (e.g., every 6 hours)
2. **Upload**:  Images sent to server via Internet (HTTP/MQTT)
3. **Diagnosis**: CNN model analyzes image for disease indicators
4. **Alert**: Results sent to mobile app
   - Example: "Leaf Spot Disease detected with 92% confidence"

### Mobile App Features

- **Dashboard**: Real-time visualization of all parameters
- **Alerts**: Push notifications for: 
  - Disease detection
  - Low water reservoir
  - Sensor malfunctions
- **Manual Control**: Override automatic systems
  - "Water Now" button for immediate irrigation
  - Manual light control

## API Documentation

### Endpoints

```
GET  /api/sensors/latest        - Get latest sensor readings
GET  /api/sensors/history       - Get historical data
POST /api/control/water         - Trigger manual watering
POST /api/control/light         - Control grow light
POST /api/image/analyze         - Submit image for AI analysis
GET  /api/alerts                - Retrieve system alerts
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Multi-plant zone support
- [ ] Weather forecast integration
- [ ] Nutrient dosing automation
- [ ] Advanced analytics and ML predictions
- [ ] Voice assistant integration (Alexa, Google Home)
- [ ] Community sharing features

## Known Issues

- Camera auto-capture scheduling needs optimization for AI training
- pH sensor calibration requires periodic maintenance

## Team

- **Project Lead**: Hồ Du Tuấn Đạt [Tdat10052499](https://github.com/Tdat10052499)
- **Member**:
- 2. Dương Chí Thiện
- 3. Dương Ngọc Linh Đan
- 4. Nguyễn Minh Chính
- 5. Lê Quang Minh   

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue or contact: 
- GitHub: [@Tdat10052499](https://github.com/Tdat10052499)

---

**Made with 🌱 for smarter, greener living**
