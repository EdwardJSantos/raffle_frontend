import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis()
    useEffect(
        function () {
            if (isWeb3Enabled) return
            if (typeof window !== "undefined") {
                if (window.localStorage.getItem("connected")) {
                    enableWeb3()
                }
            }
            console.log(`That is not ${isWeb3Enabled}`)
        },
        [isWeb3Enabled]
    )

    useEffect(function () {
        Moralis.onAccountChanged(function (account) {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("No account found")
            }
        })
    })

    return (
        <div>
            {account ? (
                <div>Connected to {account}</div>
            ) : (
                <div>
                    <center>
                        <button
                            onClick={async function () {
                                await enableWeb3()
                                if (typeof window !== "undefined") {
                                    window.localStorage.setItem("connected", "injected")
                                }
                            }}
                            disabled={isWeb3EnableLoading}
                        >
                            Connect Wallet
                        </button>
                    </center>
                </div>
            )}
        </div>
    )
}
