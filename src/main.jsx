import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-[#151515] min-h-screen">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)