import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material";
import { UserProvider } from "./context/Usercontext";
import ProjectRoutes from "./routes/ProjectRoutes";
import { pinkTheme } from "./themes/pinkTheme";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <>  
    <CartProvider>
      <UserProvider>
        <ThemeProvider theme={pinkTheme}>
 
          <NavBar/>
          <ProjectRoutes/>
          
            
        </ThemeProvider>
        
      </UserProvider>
      </CartProvider>
    </>
  );
}

export default App;
