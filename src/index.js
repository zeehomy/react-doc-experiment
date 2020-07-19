import React from 'react';
import ReactDOM from 'react-dom';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text"
          placeholder="Search..."
          value={this.props.filterText}
        />
        <p>
          <input type="checkbox"
            checked={this.props.isStockOnlu}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render () {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render () {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>{product.name}</span>

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render () {
    const filterText = this.props.filterText;
    const isStockOnlu = this.props.isStockOnlu;

    const rows = [];
    let currentCategory = null;

    this.props.products.forEach(productItem => {
      /*  显示匹配结果，只需拦截掉完全不匹配的情况，让匹配的通过即可 */

      // 关键字不匹配
      if (productItem.name.indexOf(filterText) === -1) {
        return;
      }

      if (isStockOnlu && !productItem.stocked) {
        return;
      }

      // 先写类型
      if (productItem.category !== currentCategory) {
        rows.push(
          <ProductCategoryRow key={productItem.category}
            category={productItem.category}
          />
        );
      }
      // 再写内容
      rows.push(
        <ProductRow key={productItem.name}
          product={productItem}
        />
      );
      // 替换类型
      currentCategory = productItem.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: 'ball',
      isStockOnlu: false
    };
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
          isStockOnlu={this.state.isStockOnlu}
        />
        <ProductTable products={this.props.products} 
          filterText={this.state.filterText}
          isStockOnlu={this.state.isStockOnlu}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);