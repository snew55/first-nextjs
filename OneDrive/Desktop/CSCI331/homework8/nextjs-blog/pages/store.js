import Head from "next/head";
import SearchBar from "../components/SearchBar";

export default function Store() {
    return (
        <>
        <div>
            <h1>Fake Store</h1>
            <p>Welcome to the Fake Store!</p>
            <p>Here you'll find a variety of products.</p>
        </div>
        <SearchBar/>
        </>
    );    
};