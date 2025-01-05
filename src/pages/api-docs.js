// pages/api-docs.js
import { useEffect } from "react";
import { SwaggerUIBundle } from "swagger-ui-dist";
import "swagger-ui-dist/swagger-ui.css";

export default function ApiDocs() {
    useEffect(() => {
        SwaggerUIBundle({
            url: "/api/swagger",
            dom_id: "#swagger-ui",
        });
    }, []);

    return (
        <div>
            <div id="swagger-ui"></div>
        </div>
    );
}
