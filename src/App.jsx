import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addBlog } from "./actions/blogaction";


const store = configureStore();
// Dispatch Start
store.subscribe(()=>{
   console.log( store.getState());
})


store.dispatch(addBlog({img:"https://irshad.az/resized/fit540x550/center/products/78037/kfs2.jpg",title:"Asus new laptop",desc:"this laptop is very good."}));
store.dispatch(addBlog({img:"https://irshad.az/resized/fit540x550/center/products/78037/kfs2.jpg",title:"Asus new laptop",desc:"this laptop is very good."}));
store.dispatch(addBlog({img:"https://irshad.az/resized/fit540x550/center/products/78037/kfs2.jpg",title:"Asus new laptop",desc:"this laptop is very good."}));
store.dispatch(addBlog({img:"https://irshad.az/resized/fit540x550/center/products/78037/kfs2.jpg",title:"Asus new laptop",desc:"this laptop is very good."}));
store.dispatch(addBlog({img:"https://irshad.az/resized/fit540x550/center/products/78037/kfs2.jpg",title:"Asus new laptop",desc:"this laptop is very good."}));
store.dispatch(addBlog({img:"https://irshad.az/resized/fit540x550/center/products/78037/kfs2.jpg",title:"Asus new laptop",desc:"this laptop is very good."}));








const App = () => {
  return (
    <div className="App">
        <Provider store={store}>
          <AppRouter/>
        </Provider>
      </div>
  );
};

export default App;