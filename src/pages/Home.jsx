import Navbar from "../components/Navbar";
import Listbar from "../components/Listbar";
import "./styles/Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <Listbar />
      <h1 style={{ textAlign: "center" }}>ini halaman homepage</h1>
      <p style={{ textAlign: "justify", width: "50%", margin: "auto" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam impedit aperiam obcaecati dolor sequi voluptatibus accusamus dolore corrupti rem magnam. Nemo nam eveniet officiis quas! Officiis fuga omnis in iusto expedita impedit quae laboriosam quaerat, doloremque dolore, ea distinctio deserunt cum consequuntur eaque rerum. Ab incidunt, mollitia, placeat esse id corrupti culpa obcaecati perferendis, sed repellat consequuntur repellendus odio in. Pariatur vel maiores architecto ipsam quam accusantium numquam aliquam delectus deleniti sapiente nemo ea ab minus animi perspiciatis qui obcaecati, sequi dolor mollitia. Sint ex ratione eum. At totam numquam, suscipit saepe necessitatibus quidem ut ipsum repellendus est id aperiam!</p>
    </div>
  );
};

export default Home;
