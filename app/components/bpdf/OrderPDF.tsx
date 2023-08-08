import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface DataType {
    id: string | number;
    name: string;
    cc: number;
    address: string;
    quantity: number;
    status: number;
}

interface OrderPDFGeneratorProps {
  orderData: DataType;
}

// Estilos para la tabla
const styles = StyleSheet.create({
 page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  labelColumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginBottom: 2,
  },
  dataColumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const OrderPDFGenerator: React.FC<OrderPDFGeneratorProps> = ({ orderData }) => {
  return (
      <Document>
        <Page size="A7" style={styles.page}>
          <View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Numero de Orden:</Text>
              <Text style={styles.dataColumn}>{orderData.id}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Nombre:</Text>
              <Text style={styles.dataColumn}>{orderData.name}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Documento:</Text>
              <Text style={styles.dataColumn}>{orderData.cc}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Dirección:</Text>
              <Text style={styles.dataColumn}>{orderData.address}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Cantidad:</Text>
              <Text style={styles.dataColumn}>{orderData.quantity}</Text>
            </View>
          </View>
        </Page>
      </Document>
  );
};

export default OrderPDFGenerator;



