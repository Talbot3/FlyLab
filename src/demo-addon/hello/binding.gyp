{
  "conditions": [
    ['OS=="mac"', {
      "targets": [{
        "target_name": "hi",
        "sources": [ "src/hello.cc"],
        "xcode_settings": {
          "OTHER_LDFLAGS": [
            "-Wl,-bind_at_load",
            "-framework CoreFoundation -framework CoreServices"
          ]
        }
      }, {
        "target_name": "action_after_build",
        "type": "none",
        "dependencies": ["hi"],
        "copies": [{
          "files": ["<(PRODUCT_DIR)/hi.node"],
          "destination": "./"
        }]
      }]
    }]
  ]
}