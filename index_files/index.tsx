import { jsxDEV } from "/node_modules/.vite/deps/@emotion_react_jsx-dev-runtime.js?v=d1c20c6a";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=d1c20c6a"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=d1c20c6a"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import GlobalStyles from "/src/styles.tsx";
import Pages from "/src/pages/index.tsx?t=1725568203067";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "/node_modules/.vite/deps/@apollo_client.js?v=d1c20c6a";
import { setContext } from "/node_modules/.vite/deps/@apollo_client_link_context.js?v=d1c20c6a";
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql"
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
const root = createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(ApolloProvider, { client, children: [
    /* @__PURE__ */ jsxDEV(GlobalStyles, {}, void 0, false, {
      fileName: "/Users/kirk.jackson/code/demo/graphql/sockr/client/src/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Pages, {}, void 0, false, {
      fileName: "/Users/kirk.jackson/code/demo/graphql/sockr/client/src/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/kirk.jackson/code/demo/graphql/sockr/client/src/index.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/Users/kirk.jackson/code/demo/graphql/sockr/client/src/index.tsx",
    lineNumber: 33,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgUGFnZXMgZnJvbSBcIi4vcGFnZXNcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGNyZWF0ZUh0dHBMaW5rIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0JztcblxuY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XG4gIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsJyxcbn0pO1xuXG5jb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKF8sIHsgaGVhZGVycyB9KSA9PiB7XG4gIC8vIGdldCB0aGUgYXV0aGVudGljYXRpb24gdG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlIGlmIGl0IGV4aXN0c1xuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gIC8vIHJldHVybiB0aGUgaGVhZGVycyB0byB0aGUgY29udGV4dCBzbyBodHRwTGluayBjYW4gcmVhZCB0aGVtXG4gIHJldHVybiB7XG4gICAgaGVhZGVyczoge1xuICAgICAgLi4uaGVhZGVycyxcbiAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiBcIlwiLFxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rOiBhdXRoTGluay5jb25jYXQoaHR0cExpbmspLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpISk7XG5cbnJvb3QucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgPFBhZ2VzIC8+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlID5cbik7XG4iXSwibWFwcGluZ3MiOiJBQWtDTTtBQWxDTixPQUFPLFdBQVc7QUFDbEIsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZ0JBQWdCLGNBQWMsZUFBZSxzQkFBc0I7QUFDNUUsU0FBUyxrQkFBa0I7QUFFM0IsTUFBTSxXQUFXLGVBQWU7QUFBQSxFQUM5QixLQUFLO0FBQ1AsQ0FBQztBQUVELE1BQU0sV0FBVyxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsTUFBTTtBQUU5QyxRQUFNLFFBQVEsYUFBYSxRQUFRLE9BQU87QUFHMUMsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsR0FBRztBQUFBLE1BQ0gsZUFBZSxRQUFRLFVBQVUsS0FBSyxLQUFLO0FBQUEsSUFDN0M7QUFBQSxFQUNGO0FBQ0YsQ0FBQztBQUVELE1BQU0sU0FBUyxJQUFJLGFBQWE7QUFBQSxFQUM5QixNQUFNLFNBQVMsT0FBTyxRQUFRO0FBQUEsRUFDOUIsT0FBTyxJQUFJLGNBQWM7QUFDM0IsQ0FBQztBQUVELE1BQU0sT0FBTyxXQUFXLFNBQVMsZUFBZSxNQUFNLENBQUU7QUFFeEQsS0FBSztBQUFBLEVBQ0gsdUJBQUMsTUFBTSxZQUFOLEVBQ0MsaUNBQUMsa0JBQWUsUUFDZDtBQUFBLDJCQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYztBQUFBLElBQ2QsdUJBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHQSxLQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLQTtBQUNGOyIsIm5hbWVzIjpbXX0=