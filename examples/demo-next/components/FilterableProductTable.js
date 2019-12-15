import React, { Component } from 'react';


function searchInArray(collectArray, value) {
  if (value === 'all') {
    return collectArray;
  }
  return collectArray.filter((cvalue) => {
    const ckeys = Object.keys(cvalue);
    const equal = ckeys.reduce((result, key) => {
      if (result) {
      	return true;
      }
	    if (cvalue[key].toString().includes(value.toLowerCase())) {
      	return true;
      }
    }, false);
    return equal;
  });
}

function groupByItem(collect, sortItem) {
  if (Array.isArray(collect) && sortItem) {
    return collect.reduce((result, value) => {
      if (value[sortItem]) {
        const categoryName = value[sortItem].toString();
        if (!result[categoryName]) {
          result[categoryName] = [];
        }
        result[categoryName].push(value);
      }
      return result;
    }, {});
  }
}

function ListItem(props) {
  return (
    <li>
      {props.name}  {props.price}
    </li>
  );
}

function ProductCategoryRow(props) {
  return (
    <div> {props.category}</div>
  );
}

function ProductTable(props) {
  const { productCategory } = props;
  const categories = Object.keys(productCategory);

  const categoryRow = categories.map((category) => {
    const products = productCategory[category].map((value) => (
      <ListItem key={value.id} name={value.name} price={value.price} />
    ));
    return (
      <div key={category}>
        <ProductCategoryRow category={category} />
        {products}
      </div>
    );
  });

  return (
    <div>
      <span>Name</span><span>Price</span>
      {categoryRow}
    </div>
  );
}

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryInput: 'all',
      Procucts: [
        { id: '19fdafasd', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { id: '22jhk', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { id: '39vcxv', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { id: '438768', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { id: '599007', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { id: '64kjkj', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ categoryInput: event.target.value });
  }

  render() {
    const { Procucts } = this.state;
    const result = searchInArray(Procucts, this.state.categoryInput);
    const category = groupByItem(result, 'category');
    console.log('====================================');
    console.log(category);
    console.log('====================================');
    return (
      <div >
        <input type="text" onChange={this.handleInputChange} />
        <ProductTable productCategory={category} />
      </div>
    );
  }
}
