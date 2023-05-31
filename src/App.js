import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query-devtools";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client = {queryClient}>

      <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
  )
}


export default App;

	
// const fetchedData = useQuery(key, promiseBasedFn);


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
