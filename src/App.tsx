import { Text, Button, Stack } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";
import {
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig,
  Link,
  useMatch,
  RegisteredAllRouteInfo,
} from "@tanstack/react-router";
import SideBar from "./components/SideBar";
import { Grid, Skeleton, Container } from "@mantine/core";
export default function App() {
  const rootRoute = createRouteConfig();
  const indexRoute = rootRoute.createRoute({
    path: "/test",
    component: () => <p>okkokok</p>,
  });
  const routeConfig = createRouteConfig().addChildren([
    indexRoute,
    // postsRoute.addChildren([PostsIndexRoute, postRoute]),
  ]);
  const router = createReactRouter({
    routeConfig,
    // defaultPreload: 'intent',
  });
  const child = <Skeleton height={140} radius="md" animate={false} />;
  return (
    <RouterProvider router={router}>
      <ThemeProvider>
        <Grid>
          <Grid.Col span={4}>
            <SideBar />
          </Grid.Col>
          <Grid.Col span={8}>
            <p>okokokok</p>
          </Grid.Col>
        </Grid>
      </ThemeProvider>
      <Outlet />
    </RouterProvider>
  );
}
