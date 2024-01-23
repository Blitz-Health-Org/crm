FROM --platform=linux/amd64 twentycrm/twenty-front as front

CMD ["/bin/sh", "-c", "/app/packages/twenty-front/scripts/inject-runtime-env.sh && serve build"]