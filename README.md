# AlphaView (v.0) 🧬

**AlphaView** is a next-generation protein exploration dashboard designed for the future of structural biology. It combines high-performance 3D rendering with AI-driven insights and touchless gesture controls.

> [!NOTE]
> This platform represents the **alpha-0** baseline for intelligent protein visualization, bridging the gap between raw data and educational discovery.

---

## 🚀 Key Features

- **High-Performance 3D Modeling**: Powered by **MolStar**, providing professional-grade visualization of AlphaFold structures.
- **AlphaBot AI Integration**: Real-time structural analysis and chat powered by **Groq (Llama-3)** for contextual residue explanations.
- **Gesture Control Protocol**: Touchless interaction using **MediaPipe**—rotate, pan, and zoom with hand movements.
- **Confidence Mapping**: Integrated pLDDT heatmaps to visualize the reliability of predicted structures at a glance.
- **Educational Insights**: Direct integration with **UniProt** metadata for functional and biological context.

---

## 🛠️ Tech Stack

- **Framework**: Next.js (React)
- **3D Engine**: MolStar (Visual WebGL)
- **AI Interface**: Groq API + Conversational Context
- **Vision Engine**: MediaPipe (Hand Tracking)
- **Styling**: Tailwind CSS + Glassmorphism Design System

---

## 🏃 Getting Started

### 1. Installation
Install dependencies via npm:
```bash
npm install
```

### 2. Configure Environment
Create a `.env.local` file and add your Groq API key:
```env
NEXT_PUBLIC_GROQ_API_KEY=your_key_here
```

### 3. Launch Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to begin exploration.

---

## 📖 Project Structure

For a detailed breakdown of the codebase and components, please refer to the [FILE_OVERVIEW.md](./FILE_OVERVIEW.md).

---

## 🛡️ License
Designed for researchers and students. v.0 Release.