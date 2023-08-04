import { PDFViewer, Document, Page, Text } from '@react-pdf/renderer';

interface DataType {
    id: string | number;
    name: string;
    CC: number;
    address: string;
    quantity: number;
    status: number;
}

interface OrderPDFGeneratorProps {
  orderData: DataType;
}

const OrderPDFGenerator: React.FC<OrderPDFGeneratorProps> = ({ orderData }) => {
  return (
    <PDFViewer>
      <Document>
        <Page>
          <Text>ID</Text>
          <Text>{orderData.id}</Text>
          <Text>Nombre</Text>
          <Text>{orderData.name}</Text>
          <Text>Documento</Text>
          <Text>{orderData.CC}</Text>
          <Text>Dirección</Text>
          <Text>{orderData.address}</Text>
          <Text>Cantidad</Text>
          <Text>{orderData.quantity}</Text>
          <Text>Estado</Text>
          <Text>{orderData.status}</Text>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default OrderPDFGenerator;



