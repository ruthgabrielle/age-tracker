import styled from "styled-components";

export const Container = styled.form`
margin-top: 4rem;
align-items: center;

input {
    width: 100%;
    padding: 1.5rem;
    height: 1rem;
    margin-top: 0.5rem;
    border: none;
    border-bottom: 1px solid #d7d7d7;
    background-color: var(--background);
    font-size: 1rem;
    color: var(--text-title);
    
    &::placeholder{
        color: var(--text-body)
    }
}

button[type="submit"]{
    width: 100%;
    padding: 0 0.5rem;
    height: 2rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 0.25rem;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }
}

h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

p {
    color: var(--red);
    margin-bottom: 1rem;
    padding: 0 0.5rem;

}

.content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}

`;
