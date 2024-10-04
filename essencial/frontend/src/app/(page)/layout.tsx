import Header from "@/components/template/Header";
import Page from "@/components/template/Page";

export default function Layout (props: any){
    return (
      <Page>{props.children}</Page>
    )

}