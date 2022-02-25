import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import { Container } from "../Shared/GlobalStyles";


function Home() {
  return (
    <Container>
      <Layout />
      <Table title="Mesa 01"/>
      <Table title="Mesa 02"/>
      <Table title="Mesa 03"/>
      <Table title="Mesa 04"/>
      <Table title="Mesa 05"/>
      <Table title="Mesa 06"/>
      <Table title="Mesa 07"/>
    </Container>
  );
};

export default Home;
