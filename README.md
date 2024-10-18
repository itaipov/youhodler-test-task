# Bitcoin Price Microservice

This microservice provides the current Bitcoin price from the Binance exchange, applies a 0.01% service commission to the bid and ask prices, and calculates the mid price.

Replace <PORT> with the port number you specified when starting the container.

## Installation

1. Copy `.env.local` to `.env`:

    ```bash
    cp .env.local .env
    ```

## Build and Run the Container

2. To build and run the Docker container, use the following command:

```bash
sh run.sh <PORT>
```

## Get Bitcoin Price

```bash
http://localhost:<PORT>/bitcoin-price
```

