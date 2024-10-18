class Routes<
  T extends {
    [key: string]: {
      path: string;
      params?: Array<keyof typeof routeParams>;
    };
  }
> {
  paths: T;

  constructor(paths: T) {
    this.paths = paths;
  }

  getRoute(
    path: keyof T,
    params?: { [key in keyof typeof routeParams]: string }
  ) {
    const route = this.paths[path];

    let result = "";

    if (route.params && route.params.length > 0) {
      result = route.path;

      if (!params) throw `${route.path} requires parameters to be supplied`;

      route.params.map((param) => {
        const value = params[param];

        if (!value)
          console.log(`${route.path} is missing a parameter for ${param}`);

        result = result.replaceAll(param, value);
      });
    } else {
      result = route.path;
    }

    return result;
  }
}

const routeParams = {};

type IRouteParams = Record<keyof typeof routeParams, string>;

const routePrefixes = {
  legal: "/legal",
};

const routes = new Routes({
  home: { path: "/" },
  manifesto: { path: "/manifesto" },
  privacy: { path: `${routePrefixes.legal}/privacy` },
  terms: { path: `${routePrefixes.legal}/terms` },
  cookies: { path: `${routePrefixes.legal}/cookies` },
});

export { routes, routeParams };

export type { IRouteParams };
