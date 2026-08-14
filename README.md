# Computational Biology & Molecular Dynamics Project

## Project Status: Phase 0 (Environment Setup & Installation) ✅ COMPLETED

This repository contains the local reference materials, technical setup guides, environment specifications, and an interactive React-based **Glossary & Command Cheatsheet Hub** for running structural biology workflows, 3D protein visualization, structure prediction (ESMFold/ColabFold), and atomistic molecular dynamics (MD) simulations on CachyOS using an **NVIDIA RTX 5070 Ti (16GB VRAM)** and **AMD Ryzen 7 9700X**.

---

## 🛠️ Installed Dependencies & System Inventory

The setup phase is complete. The local rig is configured with the following packages, CUDA acceleration toolkits, and Python virtual environments:

### 1. Hardware & CUDA Driver Layer
- **OS:** CachyOS Linux (Arch Linux derivative with low-latency BORE kernel)
- **CPU:** AMD Ryzen 7 9700X (8 cores / 16 threads)
- **GPU:** NVIDIA GeForce RTX 5070 Ti (16GB VRAM)
- **NVIDIA Driver:** `610.57.04` (CUDA UMD Version 13.3)
- **CUDA Toolkit:** `/opt/cuda/bin` (`nvcc` compiler installed & linked to `fish` PATH)

### 2. Environment Manager
- **Tool:** `micromamba` (Fast C++ implementation of Conda/Mamba)
- **Active Environment:** `compbio` (Python 3.11)
- **Environment Location:** `~/micromamba/envs/compbio`

### 3. Installed Package Stack (`compbio` environment)

| Domain | Installed Packages & Tools | Source / Channel | Purpose |
| :--- | :--- | :--- | :--- |
| **Python Core & Analytics** | `biopython`, `mdanalysis`, `mdtraj`, `numpy`, `scipy`, `pandas`, `matplotlib` | `conda-forge` | PDB parsing, trajectory calculation, matrix math, data plotting |
| **Deep Learning & Inference** | `torch`, `torchvision`, `torchaudio` (CUDA 12.4+) | `pytorch` index | GPU acceleration for RTX 5070 |
| **Structure Prediction** | `fair-esm` (ESMFold), `colabfold`, `mmseqs2` | `pip` / `pacman` | Transformer structural inference & fast MSA alignment |
| **Molecular Dynamics** | `openmm` (CUDA platform enabled) | `conda-forge` | Python-first GPU molecular simulation engine |
| **Molecular Dynamics** | `gromacs` (CUDA platform enabled) | `conda-forge` | C++/CUDA bio-molecular dynamics simulation suite |
| **Visualization** | `pymol-open-source`, `chimerax` | `conda-forge` / AUR | 3D molecular surface & active site binding inspection |

---

## 📖 Interactive React + Vite Hub (Glossary & Command Cheatsheet)

An interactive, maintainable React web application featuring a dual-tab layout is located inside the `glossary/` subfolder:

### Application Tabs:
1. **📖 Glossary of Terms:** Biological concepts, computational metrics ($RMSD$, $RMSF$, $SASA$, $pLDDT$, explicit solvation), hardware specs, and wet-lab synergy.
2. **⚡ Command Cheatsheet:** Executable CLI commands for PyMOL, ChimeraX, Micromamba, OpenMM, GROMACS, PyTorch, and PDB tools with one-click **📋 Copy** functionality.

### Component & Data Architecture:
```
glossary/
├── package.json              # Node dependencies (React 18, Vite 5/8)
├── vite.config.js            # Vite build configuration
├── index.html                # HTML entrypoint
└── src/
    ├── main.jsx              # React DOM mounting
    ├── App.jsx               # Main state, tab switcher, search & filters
    ├── index.css             # Glassmorphism dark-mode CSS styling
    ├── data/
    │   ├── terms.json        # Maintainable JSON dataset for terms
    │   └── commands.json     # Maintainable JSON dataset for CLI commands
    └── components/
        ├── NavigationTabs.jsx # Tab switcher (Glossary vs. Commands)
        ├── SearchBar.jsx      # Real-time search bar
        ├── TagFilters.jsx     # Category tag filters & grid/compact toggle
        ├── TermCard.jsx       # Term card component
        └── CommandCard.jsx    # Command card with one-click copy button
```

---

## 🚀 How to Launch the Hub

To run the interactive React app:

```bash
# 1. Navigate to the glossary directory
cd glossary

# 2. Install dependencies (if not already installed)
npm install

# 3. Start local development server
npm run dev
```

Once `npm run dev` is executed, the terminal will launch the Vite development server. Open the provided local server link (typically `http://localhost:5173`) in your web browser to explore both the Glossary and Command Cheatsheet.

---

## 🤖 Agent Knowledge Access

All environment specs, installed dependencies, terms (`terms.json`), commands (`commands.json`), and technical parameters stored in `README.md` are accessible to AI agents.

When you start a new chat session or ask an agent to *"Open the cheatsheet"*, *"Check PyMOL commands"*, or *"Review installed dependencies"*, the agent can inspect `README.md` and the dataset files to confirm system state, launch `npm run dev`, and present the localhost link to you.
