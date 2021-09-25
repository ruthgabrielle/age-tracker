import styled from "styled-components";

export const Container = styled.form`
margin-top: 4rem;
align-items: center;

input {
    width: 49%;
    padding: 1.5rem;
    height: 1rem;
    margin-right: 0.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-size: 1rem;

    &::placeholder{
        color: var(--text-body)
    }
}

button[type="submit"]{
    width: 99%;
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

.content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}
`;
