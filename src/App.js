
import React from "react";


 export default class Parent extends React.Component {
  doSomething = (e) => {
      console.log(e.target)
  }
  render() {
    return (
        <div className="div_flex">
          <Child price="2500" title="Game 1" src="https://basket-02.wb.ru/vol248/part24872/24872260/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="2300" title="Game 2" src="https://basket-08.wb.ru/vol1149/part114998/114998783/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="1500" title="Game 3" src="https://basket-05.wb.ru/vol998/part99834/99834622/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="1200" title="Game 4" src="https://basket-03.wb.ru/vol292/part29226/29226129/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="1900" title="Game 5" src="https://basket-02.wb.ru/vol154/part15435/15435052/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="1700" title="Game 6" src="https://basket-04.wb.ru/vol654/part65467/65467351/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="2200" title="Game 7" src="https://basket-10.wb.ru/vol1443/part144385/144385984/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="2700" title="Game 8" src="https://basket-04.wb.ru/vol488/part48882/48882481/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="3700" title="Game 9" src="https://basket-04.wb.ru/vol664/part66463/66463071/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="1500" title="Game 10" src="https://basket-05.wb.ru/vol926/part92623/92623695/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="2300" title="Game 11" src="https://basket-05.wb.ru/vol722/part72226/72226047/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="1300" title="Game 12" src="https://basket-06.wb.ru/vol1014/part101419/101419636/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="1000" title="Game 13" src="https://basket-11.wb.ru/vol1646/part164699/164699524/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="2700" title="Game 14" src="https://basket-10.wb.ru/vol1471/part147107/147107705/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
          <Child price="3700" title="Game 15" src="https://basket-11.wb.ru/vol1608/part160892/160892128/images/c516x688/1.jpg" onClick={this.doSomething}></Child>
        </div>
    )
  }
}
class Child extends React.Component {
  render() {
    return(
        <div>
            <div>
                <img src={this.props.src} alt="icons" className="img" onClick={this.props.onClick}/>
            </div>
            <span className="span">{this.props.price}</span>
            <p className="p">{this.props.title}</p>
        </div>
    )
  }
}

