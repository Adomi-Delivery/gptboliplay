import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface DataType {
  id: number;
  name: string;
  cc: number;
  address: string;
  quantity: number;
  status: number;
  createdAT: number;
  city: string;
  facebook: string;
  instagram: string;
  client: string;
  client_phone: string;

}

interface OrderPDFGeneratorProps {
  orderData: DataType|null
}

// Estilos para la tabla
const styles = StyleSheet.create({
 page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginRight: 20, // Margen a la derecha
    marginTop: 5, // Margen arriba
    marginBottom: 5, // Margen abajo
  },
  labelColumn: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginTop: 5,
  },
  dataColumn: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 5,
    fontSize: '15px',
  },
});


const OrderPDFGenerator: React.FC<OrderPDFGeneratorProps> = ({ orderData }) => {
  return (
      <Document>
        <Page size="A5" style={styles.page}>
          <View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Numero de Orden:</Text>
              <Text style={styles.dataColumn}>{orderData?.id}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Nombre:</Text>
              <Text style={styles.dataColumn}>{orderData?.name}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Documento:</Text>
              <Text style={styles.dataColumn}>{orderData?.cc}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Dirección:</Text>
              <Text style={styles.dataColumn}>{orderData?.address}</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.labelColumn}>Ciudad:</Text>
              <Text style={styles.dataColumn}>{orderData?.city}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Facebook:</Text>
              <Text style={styles.dataColumn}>{orderData?.facebook}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Instagram:</Text>
              <Text style={styles.dataColumn}>{orderData?.instagram}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.labelColumn}>Cantidad:</Text>
              <Text style={styles.dataColumn}>{orderData?.quantity}</Text>
            </View>
          </View>
        </Page>
      </Document>
  );
};

export default OrderPDFGenerator;



