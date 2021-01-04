<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
        html,
        body {
            width: 210mm;
            height: 297mm;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            width: calc(210mm - 30px);
            padding: 15px;
            box-sizing: border-box;
        }

        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 15px;
        }

        th {
            text-align: left;
        }
    </style>
</head>

<body
    style="box-sizing: border-box; width: 763.7007874px; font-size: 14px; font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <h2 style="text-align: center;">ORDRE DE TRAVAIL N° {{ $ref }} Du: {{ $date }}</h2>

    <div style="border: 1px solid black; padding: 15px; box-sizing: border-box;">
        <div>
            <div style="display: inline-block; padding-right: 50px;">REF. CLIENT: <strong>{{ $customer->ref }}</strong></div>
            <div style="display: inline-block;">NOM DU CLIENT: <strong>{{ $customer->name }}</strong></div>
        </div>

        <div>
            <div style="display: inline-block; padding-right: 50px;">BON DE CDE / OA N°: <strong>{{ $ref }}</strong></div>
            <div style="display: inline-block;">DATE DE LIVRAISON: <strong>{{ $delivery_date }}</strong></div>
        </div>
    </div>



    <h3 style="text-align: center;">
        <span style="padding-bottom: 5px; box-sizing: border-box; border-bottom: 1px solid black;">NATURE DES
            TRAVAUX</span>
    </h3>

    <table border="1" style="width: 100%; margin-bottom: 30px;">
        <thead>
            <tr>
                <th>PROBLEMES</th>
                <th>SOLUTIONS</th>
                <th>QTE</th>
                <th>P.U. (en FCFA)</th>
                <th>P.T. (en FCFA)</th>
            </tr>
        </thead>

        <tbody>
            @foreach ($problems as $problem)
            @foreach ($problem['solutions'] as $i => $solution)
            <tr>
                @if ($i === 0)
                <td rowspan="{{ count($problem['solutions']) }}">{{ $problem['name'] }}</td>
                @endif
                <td>{{ $solution['solution']['name'] }}</td>
                <td>{{ $solution['quantity'] }}</td>
                <td>{{ $solution['solution']['price'] }}</td>
                <td>{{ $solution['solution']['price'] * $solution['quantity'] }}</td>
            </tr>    
            @endforeach
            @endforeach
        </tbody>

        <tfoot>
            <tr>
                <th colspan="4">TOTAL</th>
                <th>{{ $total }}</th>
            </tr>
        </tfoot>
    </table>

    <table border="1" style="width: 100%; margin-bottom: 60px;">
        <thead>
            <tr>
                <th style="text-align: center;">OBSERVATIONS</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>
                    {{ '' }}
                </td>
            </tr>
        </tbody>
    </table>

    <div style="border: 1px solid black; padding: 15px; box-sizing: border-box; margin-bottom: 30px;">
        <div>
            Date de livraison prévue: <strong>{{ $delivery_date }}</strong>
        </div>

        <div>
            Début réel des travaux: <strong>{{ $real_start_date }}</strong>
        </div>

        <div style="text-align: right;">
            Fin d'exécution: <strong>{{ $real_end_date }}</strong>
        </div>

        <div>
            Nombre de jours effectifs: <strong>{{ $days }}</strong>
        </div>
    </div>

    <table border="1" style="width: 100%;">
        <thead>
            <tr>
                <th>SERVICES DES ACHATS</th>
                <th>ADMINISTRATION</th>
                <th>CHEF ATELIER / ADJOINT</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td style="height: 70px;"></td>
                <td style="height: 70px;"></td>
                <td style="height: 70px;"></td>
            </tr>
        </tbody>
    </table>
</body>

</html>