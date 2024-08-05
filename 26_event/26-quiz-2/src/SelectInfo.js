import React from 'react'

const SelectInfo = (props) => {
    const {setFruit} = props;
    

    return (
        <div>
            <form>
                <label htmlFor="fruit-type">과일</label>
                <select onChange={(e) => {setFruit(prev => 
                    {return {...prev, type: e.target.value}})}} id="fruit-type">
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="orange">오렌지</option>
                    <option value="peach">복숭아</option>
                </select>

                <label htmlFor="fruit-bc">배경색</label>
                <select onChange={(e) => {setFruit(prev => 
                    {return {...prev, backgroundColor: e.target.value}})}} id="fruit-bc">
                    <option value="black">검정</option>
                    <option value="white">하양</option>
                    <option value="red">빨강</option>
                    <option value="green">초록</option>
                </select>

                <label htmlFor="fruit-color">글자색</label>
                <select onChange={(e) => {setFruit(prev => 
                    {return {...prev, textColor: e.target.value}})}} id="fruit-color">
                    <option value="black">검정</option>
                    <option value="white">하양</option>
                    <option value="red">빨강</option>
                    <option value="green">초록</option>
                </select>


            </form>
        </div>
    )
}

export default SelectInfo