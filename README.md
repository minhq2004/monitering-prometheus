Họ tên: Nguyễn Quang Minh

MSV: 22024547

Deploy the chart into a new namespace:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm repo update

helm upgrade kube-prometheus-stack prometheus-community/kube-prometheus-stack -n kube-prometheus-stack -f node-exporter-values.yaml
```

Prometheus for monitering:
![prom1](img/pro1.png)

![prom2](img/prom2.png)

Grafana for visualization and dashboards:

Cluster
![cluster](img/cluster_gra.png)

Node
![node](img/gra4.png)

Pod
![Pod](img/gra2.png)

Redeploy the Prometheus stack and apply your Alertmanager settings:

```bash
helm upgrade kube-prometheus-stack prometheus-community/kube-prometheus-stack \  -n kube-prometheus-stack \
  --reuse-values \
  -f alertmanager-config.yaml
```

Configure alerts with Alertmanager

![al](img/alertmanager.png)

Send alert through email

![mail](img/mail.png)

Send alert through Web API

![weebhook](img/webhook.png)

![code](img/code.png)
