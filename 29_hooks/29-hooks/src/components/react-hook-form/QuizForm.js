import React from 'react';
import { useForm } from 'react-hook-form';

export default function QuizForm() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

     const onValid = (data) => {
        console.log('onValid >>>>> ', data); // {username: '안녕'}
    };

    const onInValid = (err) => {
        console.log('onInValid >>>>> ', err);
    };

    return (
        <div>
            <h1>Quiz 1 - react hook form</h1>
            <form onSubmit={handleSubmit(onValid, onInValid)}>
                <input 
                    type="text" 
                    placeholder='Your name'
                    {
                        ...register('username', {
                            required: '이름은 필수항목임'
                        })
                    }
                    /> 
                    {errors.username?.message}
                    <br />
                <input 
                    type="number" 
                    placeholder='Your age'
                    {
                        ...register('userAge', {
                            required: '나이는 필수항목임',
                            validate: {
                                overZero: (v) =>
                                    v >= 0 || '0 이상의 숫자만 가능',
                            }
                        })
                    }
                /> 
                {errors.userAge?.message}
                <br />
                <button type="submit">Submut</button>
            </form>
        </div>
    )
}