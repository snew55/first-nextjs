import React, { useState, useEffect } from "react";

export default function SearchBar() {
  const [products, set_products] = useState([]);
  const [filtered_products, set_filtered_products] = useState([]);
  const [search_term, set_search_term] = useState('');

  useEffect(() => {
    const fetch_products = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        set_products(data);
        set_filtered_products(data);
      } catch (error) {
        console.error("Error fetching products");
      }
    };
    fetch_products();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => product.title.toLowerCase().includes(search_term.toLowerCase()));
    set_filtered_products(filtered);
  }, [search_term, products]);

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search for product"
        value={search_term}
        onChange={(e) => set_search_term(e.target.value)}
        style={styles.searchInput}
      />
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeaderRow}>
            <th style={styles.tableHeader}>Image</th>
            <th style={styles.tableHeader}>Title</th>
            <th style={styles.tableHeader}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered_products.map((product) => (
            <tr style={styles.tableRow} key={product.id}>
              <td style={styles.tableCell}><img style={styles.productImage} src={product.image} alt={product.title} /></td>
              <td style={styles.tableCell}>{product.title}</td>
              <td style={styles.tableCell}>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '20px auto',
  },
  searchInput: {
    padding: '10px',
    width: '100%',
    maxWidth: '500px',
    fontSize: '16px',
    margin: '20px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  tableHeaderRow: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  tableHeader: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderBottom: '2px solid #ddd',
  },
  tableRow: {
    backgroundColor: 'white',
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.3s',
  },
  tableCell: {
    padding: '15px',
    fontSize: '14px',
  },
  productImage: {
    width: '60px',
    borderRadius: '4px',
  },
};

// Adding a hover effect for rows
styles.tableRow[':hover'] = {
  backgroundColor: '#f1f1f1',
};