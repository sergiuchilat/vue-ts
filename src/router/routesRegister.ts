import adminRoutes from "../modules/admin/routes/index";
import errorsRoutes from "./routes/error_pages";
const routesRegister = (lang: string) => {
  return [
    ...adminRoutes(lang),
    ...errorsRoutes(lang)
  ];
};
export default routesRegister;
